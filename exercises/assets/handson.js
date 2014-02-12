(function(exports) {
  /* HTML CHAR: play ► pause ▌▌ stop ■ */
  var storage = localStorage;

  var stepByStep = function (pageName, root) {
    this.__pageName = pageName;
    this.__root = root;

    this.__storageKey = [this.__pageName, "session", "start"].join("_");
    this.__storageStepKey = [this.__storageKey, "step"].join("_");

    this.__steps = this.__root.querySelectorAll(".step");
    this.__headers = this.__root.querySelectorAll("h3");

    this.__start_button = (function() {
      var button = document.createElement("button");
      button.classList.add("session-start-stop");
      return button;
    })();

    this.__next_button = (function() {
      var button = document.createElement("button");
      button.classList.add("session-next-step");
      button.innerHTML = stepByStep.NEXT_STEP_LABEL;
      return button;
    })();

    this.__next_button.onclick = this.__nextStep.bind(this);

  };

  stepByStep.START_SESSION_LABEL = "► Start the session";
  stepByStep.RESET_SESSION_LABEL = "■ Reset the session (%s/%s)";
  stepByStep.NEXT_STEP_LABEL = "➔ Go to next step";
  stepByStep.VALIDATE_AND_NEXT_STEP_LABEL = "➔ Test your code before going to next step";

  stepByStep.prototype = {


    init: function() {
      console.log("This hands-on session contains", this.__steps.length, "steps");
      var title = this.__root.querySelector("h1");
      if(this.isActive()) {
        this.__bindReset();
        var step = this.__getStep();
        this.__updateStep(step);
      } else {
        this.__bindStart();
      }
      title.parentNode.insertBefore(this.__start_button, title);
    },

    startSession: function() {
      storage.setItem(this.__storageKey, (new Date()).toISOString());
      this.__bindReset();
      var step = this.__getStep();
      this.__updateStep(step);
    },

    resetSession: function() {
      this.__next_button.parentNode.removeChild(this.__next_button);
      storage.removeItem(this.__storageKey);
      storage.removeItem(this.__storageStepKey);
      this.__bindStart();
      this.__hideSteps(Infinity);
    },

    isActive: function() {
      return storage.getItem(this.__storageKey);
    },

    __displayNextStep: function(index) {
      if (index === this.__steps.length) {
        document.body.scrollIntoView();
        var start_time = (new Date(storage.getItem(this.__storageKey))).getTime(),
            end_time = (new Date()).getTime(),
            duration = Math.floor((end_time - start_time) / 1000 / 60);

        alert("Congratulation! You have reached the hand of this hands-on session.\nIt took you " + duration + " minutes to do it.");
        this.resetSession();
        return;
      }

      var step = this.__steps[index];
      if (step.classList.contains("test")) {
        this.__next_button.innerHTML = stepByStep.VALIDATE_AND_NEXT_STEP_LABEL;
        this.__next_button.classList.add("session-next-step-test");
      } else {
        this.__next_button.innerHTML = stepByStep.NEXT_STEP_LABEL;
        this.__next_button.classList.remove("session-next-step-test");
      }
      //step.parentNode.insertBefore(this.__next_button, step);
      step.insertBefore(this.__next_button, step.firstChild);

      this.__start_button.innerHTML = stepByStep.RESET_SESSION_LABEL.replace("%s", (index + 1)).replace("%s", this.__steps.length);
    },

    __getStep: function() {
      return parseInt(storage.getItem(this.__storageStepKey) || 0, 10);
    },

    __nextStep: function() {
      var step = this.__getStep() + 1;
      storage.setItem(this.__storageStepKey, step);
      this.__updateStep(step);
    },

    __updateStep: function(index) {
      var step = this.__steps[index];
      this.__processHeaders(index);
      this.__hideSteps(index);
      this.__displayNextStep(index);
      step && step.previousElementSibling && (step.previousElementSibling.lastElementChild || step.previousElementSibling).scrollIntoView();
    },

    __processHeaders: function(index) {
      if (index === this.__steps.length) {
        return;
      }
      var step = this.__steps[index];
      for(var i = 0, l = this.__headers.length; i < l; i++) {
        var header = this.__headers[i];
        switch (step.compareDocumentPosition(header)) {
          case 4: //Follows
            header.classList.add("hidden-notice");
            break;
          case 2: //Precedes
            header.classList.remove("hidden-notice");
            break;
        }
      }
    },

    __hideSteps: function(start_index) {
      start_index = start_index || 0;
      for(var i = 0, l = this.__steps.length; i < l; i++) {
        var step = this.__steps[i];
        if (i <= start_index) {
          step.classList.remove("hidden");
        } else {
          step.classList.add("hidden");
        }
      }
    },

    __bindStart: function() {
      this.__start_button.innerHTML = stepByStep.START_SESSION_LABEL;
      this.__start_button.classList.remove("session-started");
      this.__start_button.onclick = this.startSession.bind(this);
    },

    __bindReset: function() {
      this.__start_button.innerHTML = stepByStep.RESET_SESSION_LABEL;
      this.__start_button.classList.add("session-started");
      this.__start_button.onclick = this.resetSession.bind(this);
    }
  };

  exports.handson = function(pageName, root) {
    root = root || document;
    var sbs = new stepByStep(pageName, root);
    sbs.init();
    return sbs;
  };

})(window);