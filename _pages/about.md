---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi there! 👋 I’m Shuheng Hu (胡书恒), a final-year Information and Computing Science undergraduate student at Xi’an Jiaotong-Liverpool University, advised by [Dr. Zhiguang Cao](https://zhiguangcaosg.github.io/) and [Dr. Haiyang Zhang](https://scholar.xjtlu.edu.cn/en/persons/HaiyangZhang/).

My research interests lie in **interpreting and efficiently controlling LLM behaviors**, with a focus on:
- Multimodal reasoning of LLMs and VLMs
- Autonomous agent frameworks with self-improvement
- Trustworthy and traceable systems over long horizons

<!-- algorithmic foundations of multimodal large models and optimization problems. -->

Please don't hesitate to reach out if you'd like to discuss research collaborations, share ideas, or simply chat and connect!

# 🔥 News
- *2026.8*: &nbsp;🎉 One paper is accepted by EMNLP 2026!
- *2026.6*: &nbsp;🎉 One paper is accepted by MobileHCI 2026!
- *2025.11*: &nbsp;🎉 One paper is accepted by Brain Inspired Cognitive Systems (BICS), 2025!

# 📝 Papers 

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026</div><img src='images/CLAIR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Multimodal Boolean Logic Culture Retrieval

Jian Zhang, **Shuheng Hu**, Jiutian Chang, Junyi Guo, Huanda Lu, Qiufeng Wang, Fangyu Wu
<!-- EMNLP Findings, 2026 -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MobileHCI 2026</div><img src='images/movemate.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MoveMate: Supporting Video-Guided Workouts through Motion Visual Analysis and Multi-Device Guidance](https://programs.sigchi.org/mobilehci/2026/program/content/263573)

Yihan Liu, Anqi Xie, **Shuheng Hu**, Yong Yue, Yu Liu
<!-- ACM International Conference on Mobile Human-Computer Interaction (MobileHCI), 2026. -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BICS 2025</div><img src='images/bics.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Cross-Subject EEG Emotion Recognition via Adaptive Representation and Attention Fusion
<!-- (https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf) -->

Siyuan Gao, **Shuheng Hu**, Zhao Wang, Yumei Luo, Fangyu Wu
<!-- brain inspired cognitive systems (BICS), 2025 -->

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preprint</div><img src='images/muse.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

ArtiMuse: A Comprehensive Dataset for Multimodal Cultural Understanding of Chinese Museum Artifacts

Jian Zhang, Junyi Guo, **Shuheng Hu**, Jiutian Chang, Qiufeng Wang, Fangyu Wu

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preprint</div><img src='images/TBME.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Personalized Glucose Monitoring of Diabetes: An Efficient 2D Controllable Holt-Winters Model with PID Controllers

Sijie Xiong, **Shuheng Hu**, Tao Sun, Yuanyuan Zhang, Cheng Tang, Rui Yang, Atsushi Shimada

</div>
</div>

# 📖 Educations
- *2023.09 - 2027.06*, BSc. Information and Computing Science, Xi’an Jiaotong-Liverpool University

<style>
.terminal-container{width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);font-family:’Fira Code’,’Cascadia Code’,’Consolas’,monospace;font-size:14px;border:1px solid #e0dcd4;margin-bottom:80px}
.terminal-header{background:#f0ece2;padding:10px 16px;display:flex;align-items:center;gap:8px}
.terminal-dot{width:12px;height:12px;border-radius:50%}
.terminal-dot.red{background:#f0a89e}.terminal-dot.yellow{background:#f0d29a}.terminal-dot.green{background:#aacbac}
.terminal-header-title{color:#8c857a;font-size:13px;margin-left:8px;opacity:.7}
.terminal-body{background:#f7f4ed;padding:20px;min-height:120px}
.terminal-output-line{color:#4a4640;margin-bottom:6px;line-height:1.6;white-space:pre-wrap}
.terminal-output-line .highlight{color:#b07158}.terminal-output-line .accent{color:#5b8366}.terminal-output-line .warn{color:#b07158}.terminal-output-line .error{color:#c25d5d}
.terminal-prompt-line{display:flex;align-items:center;margin-top:8px}
.terminal-user{color:#5b8366}.terminal-at{color:#8c857a}.terminal-host{color:#b07158}.terminal-sep{color:#8c857a}.terminal-path{color:#7b9ebd}.terminal-dollar{color:#8c857a;margin-right:8px}
.terminal-input{background:transparent;border:none;outline:none;color:#4a4640;font-family:inherit;font-size:inherit;flex:1;caret-color:#5b8366}
.terminal-input::placeholder{color:#c0bab0}
.terminal-hint{color:#b0a99e;padding:8px 0 0;font-size:12px}
.terminal-hint span{color:#b07158}
.terminal-ascii{color:#b07158}.terminal-coffee-art{color:#b07158}
.color-block{display:inline-block;width:18px;height:18px;border-radius:3px;margin-right:4px;vertical-align:middle}
</style>

<div class="terminal-container">
  <div class="terminal-header">
    <div class="terminal-dot red"></div>
    <div class="terminal-dot yellow"></div>
    <div class="terminal-dot green"></div>
    <span class="terminal-header-title">visitor@shuheng ~ </span>
  </div>
  <div class="terminal-body" id="terminalBody">
    <div class="terminal-prompt-line">
      <span class="terminal-user">visitor</span><span class="terminal-at">@</span><span class="terminal-host">shuheng</span><span class="terminal-sep">:</span><span class="terminal-path">~</span><span class="terminal-dollar">$</span>
      <input class="terminal-input" id="terminalInput" type="text" placeholder="type ‘help’ for commands..." autocomplete="off" spellcheck="false">
    </div>
    <div class="terminal-hint">💡 Try: <span>help</span> · <span>neofetch</span> · <span>fortune</span> · <span>coffee</span> · <span>sudo</span> · <span>clear</span></div>
  </div>
</div>

<script src="assets/js/terminal.js"></script>
