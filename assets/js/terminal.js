document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementById("terminalBody");
  var input = document.getElementById("terminalInput");
  if (!body || !input) return;

  var hintHTML = body.querySelector(".terminal-hint").outerHTML;

  var commands = {
    help: function () {
      return [
        '<span class="highlight">Available commands:</span>',
        '  <span class="accent">help</span>      - Show this help message',
        '  <span class="accent">neofetch</span>  - Display system info',
        '  <span class="accent">fortune</span>   - Get a random quote',
        '  <span class="accent">coffee</span>    - Brew some coffee',
        '  <span class="accent">sudo</span>      - Try sudo',
        '  <span class="accent">clear</span>     - Clear terminal',
      ];
    },
    neofetch: function () {
      return [
        '<span class="terminal-ascii"> _   _ ____  _   _</span>',
        '<span class="terminal-ascii">| | | / ___|| | | |</span>   <span class="highlight">visitor</span>@<span class="highlight">shuheng</span>',
        '<span class="terminal-ascii">| |_| \\___ \\| |_| |</span>   ────────────────────',
        '<span class="terminal-ascii">|  _  |___) |  _  |</span>   <span class="accent">Name:</span> Shuheng Hu (胡书恒)',
        '<span class="terminal-ascii">|_| |_|____/|_| |_|</span>   <span class="accent">Role:</span> Student &amp; Researcher @ XJTLU',
        '                      <span class="accent">Research:</span> Multimodal LLMs · Agents',
        '                      <span class="accent">Location:</span> Suzhou, China 🇨🇳',
        '                      <span class="accent">Uptime:</span> Since Sept. 2023',
        '                      <span class="color-block" style="background:#bf616a"></span><span class="color-block" style="background:#d08770"></span><span class="color-block" style="background:#ebcb8b"></span><span class="color-block" style="background:#a3be8c"></span><span class="color-block" style="background:#8fbcbb"></span><span class="color-block" style="background:#88c0d0"></span><span class="color-block" style="background:#81a1c1"></span><span class="color-block" style="background:#b48ead"></span>',
      ];
    },
    fortune: function () {
      var quotes = [
        "The best way to predict the future is to invent it. — Alan Kay",
        "Talk is cheap. Show me the code. — Linus Torvalds",
        "Any sufficiently advanced technology is indistinguishable from magic. — Arthur C. Clarke",
        "Simplicity is the soul of efficiency. — Austin Freeman",
        "First, solve the problem. Then, write the code. — John Johnson",
        "Stay hungry, stay foolish. — Steve Jobs",
        "In the middle of difficulty lies opportunity. — Albert Einstein",
        "The only way to do great work is to love what you do. — Steve Jobs",
      ];
      return [
        '<span class="warn">🔮 ' +
          quotes[Math.floor(Math.random() * quotes.length)] +
          "</span>",
      ];
    },
    coffee: function () {
      return [
        '<span class="terminal-coffee-art">    ( (</span>',
        '<span class="terminal-coffee-art">     ) )</span>',
        '<span class="terminal-coffee-art">  ........</span>',
        '<span class="terminal-coffee-art">  |      |]</span>',
        '<span class="terminal-coffee-art">  \\      /</span>',
        "<span class=\"terminal-coffee-art\">   `----'</span>",
        "",
        '<span class="accent">☕ Brewing fresh coffee... Done! Enjoy!</span>',
      ];
    },
    sudo: function () {
      return [
        '<span class="error">🚫 Permission denied: Nice try! You are not root here 😄</span>',
      ];
    },
  };

  function scrollToBottom() {
    setTimeout(function () {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 50);
  }

  function addOutput(lines) {
    var prompt = body.querySelector(".terminal-prompt-line");
    lines.forEach(function (line) {
      var div = document.createElement("div");
      div.className = "terminal-output-line";
      div.innerHTML = line;
      body.insertBefore(div, prompt);
    });
    scrollToBottom();
  }

  function newPrompt(cmd) {
    var prompt = body.querySelector(".terminal-prompt-line");
    var div = document.createElement("div");
    div.className = "terminal-output-line";
    div.innerHTML =
      '<span class="terminal-user">visitor</span><span class="terminal-at">@</span><span class="terminal-host">shuheng</span><span class="terminal-sep">:</span><span class="terminal-path">~</span><span class="terminal-dollar">$</span> ' +
      cmd;
    body.insertBefore(div, prompt);
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var cmd = input.value.trim().toLowerCase();
      input.value = "";
      if (!cmd) return;
      newPrompt(cmd);
      if (cmd === "clear") {
        var outputLines = body.querySelectorAll(".terminal-output-line");
        outputLines.forEach(function (el) {
          el.remove();
        });
        var oldHint = body.querySelector(".terminal-hint");
        if (oldHint) oldHint.remove();
        var prompt = body.querySelector(".terminal-prompt-line");
        prompt.insertAdjacentHTML("afterend", hintHTML);
      } else if (commands[cmd]) {
        addOutput(commands[cmd]());
      } else {
        addOutput([
          '<span class="error">command not found: ' +
            cmd +
            ". Type 'help' for available commands.</span>",
        ]);
      }
      scrollToBottom();
    }
  });

  body.addEventListener("click", function () {
    input.focus();
  });
});
