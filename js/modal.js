/**
 * @module neue/modal
 * Show/hide modals. Link should have `.js-modal-link` class, and
 * it's `href` should point to the hash of the modal. By convention, the
 * modal ID should be prefixed with `modal--` like so:
 *
 * @example
 * // <script type="text/cached-modal" id="modal--login">
 * //   <!-- content -->
 * // </script>
 *
 */

define(function(require) {
  "use strict";

  var $ = require("jquery");
  require("./vendor/modernizr");

  var Validation = require("./validation");

  // We can only have one modal open at a time; we track that here.
  var modalIsOpen = false;

  // The modal container (including background overlay).
  var $modal = null;

  // The content of the modal.
  var $modalContent = null;

  // Reference to current modal source
  var $reference = null;

  // Return a boolean if modal is open or not
  var isOpen = function() {
    return modalIsOpen;
  };

  // Click handler for opening a new modal
  var _openHandler = function(event) {
    event.preventDefault();
    var href = "";

    if( $(this).data("cached-modal") ) {
      // Preferred method: We load the modal specified in the `data-cached-modal` attribute.
      // This allows `href` to act as a backup if JS is disabled. For example,
      // `<a class="js-modal-link" data-cached-modal="#modal--faq" href="faq.html">Click</a>`
      // would open a modal with the contents of `<div id="modal--faq"></div>`.
      href = $($(this).data("cached-modal"));
    } else if ( event.target.hash.charAt(0) === "#"  ) {
      // We find the modal based on the ID in the link"s `href`. For example,
      // `<a class="js-modal-link" href="#modal--faq">Click me</a>` would open
      // `<div id="modal--faq"></div>`.
      href = $(event.target.hash);
    } else {
      // @TODO: We should handle AJAX loading things in.
    }

    open(href);
  };

  /**
   * Open a new modal
   * @param {jQuery}  el                Element that will be placed inside the modal.
   * @param {boolean} [animated=true]   Use animation for opening the modal.
   */
  var open = function($el, animated) {
    // Default arguments
    animated = typeof animated !== "undefined" ? animated : true;

    var id = $el.attr("id");
    if(id) {
      // Save ID of modal for future reference
      $reference = "#" + id;

      // Set URL hash in the browser
      window.location.hash = "#" + id;
    } else {
      $reference = "";
    }

    // If Google Analytics is set up, we fire an event to track that a
    // modal has been opened.
    if(typeof(_gaq) !== "undefined" && _gaq !== null) {
      _gaq.push(["_trackEvent", "Modal", "Open", $reference, null, true]);
    }

    if( !modalIsOpen ) {
      // create modal in DOM
      $modal = $("<div class=\"modal\"></div>");
      $modalContent = $("<div class='modal-content'></div>");
      $modal.append($modalContent);
      $modalContent.html( $el.html() );

      // set up overlay and show modal
      $("body").addClass("modal-open");
      $("body").append($modal);

      if(animated && Modernizr.cssanimations) {
        $modal.addClass("fade-in");
        $modalContent.addClass("fade-in-up");
        $modalContent.addClass( $el.attr("class") );
      }

      $modal.show();

      // Bind events to close Modal
      $modal.on("click", ".js-close-modal", _closeHandler);
      $modal.on("click", _closeHandler);

      modalIsOpen = true;

      //  **This fixes an issue with `position:fixed` and the virtual keyboard
      //  on Mobile Safari.** Since this is a browser bug, we're forced to use
      //  browser-detection here, and should look into removing this as soon
      //  as this is fixed in the future. Yes, it is gross.
      if(  /iPhone|iPad|iPod/i.test(window.navigator.userAgent) ) {
        setTimeout(function () {
          $modal.css({ "position": "absolute", "overflow": "visible", "height": $(document).height() + "px" });
          $modalContent.css({ "margin-top": $(document).scrollTop() + "px" });
        }, 0);
      }
    } else {
      // modal is already open, so just replace current content
      $modalContent.html( $($el).html() );
    }

    // We'll set up form validation markup for anything in the modal (since it isn't in the DOM on load)
    // @TODO: Should be providing an event that other modules can hook into (so the Validation Module would take care of this).
    Validation.prepareFormLabels($modalContent);

    // If Drupal has some messages on the screen, move them inside the modal
    // @TODO: We need a better solution for this.
    var $messages = $(".messages");
    var $messagesClone = $modalContent.find(".js-messages-clone");
    if($messagesClone && $messages.length ) {
      $messagesClone.addClass("modal-messages");
      $messagesClone.html( $messages[0].outerHTML );
    }
  };

  var _closeHandler = function(event) {
    // Don't let the event bubble.
    if(event.target !== this) {
      return;
    }

    // Only close if this modal has a close button
    if($modalContent.find(".js-close-modal").length === 0) {
      return;
    }

    // Override default link behavior.
    event.preventDefault();

    close();
  };

  /**
   * Close the active modal.
   * @param {boolean} [animated=true] Use animation for closing the modal.
   */
  var close = function(animated) {
    // Default arguments
    animated = typeof animated !== "undefined" ? animated : true;

    // Remove URL hash for modal from browser
    if(window.location.hash === $reference) {
      window.location.hash = "_";
    }

    // If Google Analytics is set up, we fire an event to track that a
    // modal has been closed.
    if(typeof(_gaq) !== "undefined" && _gaq !== null) {
      _gaq.push(["_trackEvent", "Modal", "Close", $reference, null, true]);
    }

    if(animated && Modernizr.cssanimations) {
      $modalContent.addClass("fade-out-down");
      $modal.addClass("fade-out");

      $("body").removeClass("modal-open");

      $modal.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
        $modal.remove();
        modalIsOpen = false;
      });
    } else {
      $("body").removeClass("modal-open");
      $modal.remove();
      modalIsOpen = false;
    }
  };

  $(document).ready(function() {
    // Attach modal handler to `.js-modal-link` elements on click
    $("body").on("click", ".js-modal-link", _openHandler);

    //If there's a hash in the URL, let's check if its a modal and load it
    var hash = window.location.hash;
    if(hash && $(hash) && $(hash).attr("type") === "text/cached-modal" ) {
      open($(hash), false);
    }

    // Close modal events are bound on modal initialization.
  });


  // Return public API for controlling modals
  return {
    isOpen: isOpen,
    open: open,
    close: close
  };

});
