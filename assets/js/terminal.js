document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementById("terminalBody");
  var input = document.getElementById("terminalInput");
  if (!body || !input) return;

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
        '<span class="terminal-ascii">| |_| \\___ \\| |_| |</span>   __________________',
        '<span class="terminal-ascii">|  _  |___) |  _  |</span>   <span class="accent">Name:</span> Shuheng Hu (胡书恒)',
        '<span class="terminal-ascii">|_| |_|____/|_| |_|</span>   <span class="accent">Role:</span> Student &amp; Researcher @ XJTLU',
        '                      <span class="accent">Research:</span> Multimodal LLMs · Optimization',
        '                      <span class="accent">Location:</span> Suzhou, China 🇨🇳',
        '                      <span class="accent">Uptime:</span> Since Sept. 2023',
        '                      <span style="color:#bf616a">██</span><span style="color:#d08770">██</span><span style="color:#ebcb8b">██</span><span style="color:#a3be8c">██</span><span style="color:#88c0d0">██</span><span style="color:#81a1c1">██</span><span style="color:#b48ead">██</span>',
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
        '<span class="terminal-coffee-art">  |      |</span>',
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

  function addOutput(lines) {
    var prompt = body.querySelector(".terminal-prompt-line");
    lines.forEach(function (line) {
      var div = document.createElement("div");
      div.className = "terminal-output-line";
      div.innerHTML = line;
      body.insertBefore(div, prompt);
    });
    body.scrollTop = body.scrollHeight;
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
        var hint = body.querySelector(".terminal-hint");
        if (hint) hint.style.display = "none";
      } else if (commands[cmd]) {
        addOutput(commands[cmd]());
      } else {
        addOutput([
          '<span class="error">command not found: ' +
            cmd +
            ". Type 'help' for available commands.</span>",
        ]);
      }
      body.scrollTop = body.scrollHeight;
    }
  });

  body.addEventListener("click", function () {
    input.focus();
  });
});
