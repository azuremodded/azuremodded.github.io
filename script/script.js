document.addEventListener("DOMContentLoaded", function() {
  const messageDiv = document.getElementById('message');
  const copyArea = document.getElementById('copyArea');
  const copyButton = document.getElementById('copyButton');
  copyArea.style.display = 'block';
  copyButton.style.display = 'block';
});

function copyText() {
  const fullScript = `--[[
############################################################################
#     _     ______   _ ____  _____   __  __  ___  ____  ____  _____ ____   #
#    / \\   |__  / | | |  _ \\| ____| |  \\/  |/ _ \\|  _ \\|  _ \\| ____|  _ \\  #
#   / _ \\    / /| | | | |_) |  _|   | |\\/| | | | | | | | | | |  _| | | | | #
#  / ___ \\  / /_| |_| |  _ <| |___  | |  | | |_| | |_| | |_| | |___| |_| | #
# /_/   \\_\\/____|\\___/|_| \\_\\_____| |_|  |_|\\___/|____/|____/|_____|____/  #
#                                                                          #
#  _                   _        _                                          #
# | |__  _   _        / \\   ___| |_ _   _ _ __ _ __                        #
# | '_ \\| | | |      / _ \\ / __| __| | | | '__| '_ \\                       #
# | |_) | |_| |     / ___ \\ (__| |_| |_| | |  | | | |                      #
# |_.__/ \\__, |    /_/   \\_\\___|\\__|\\__, |_|  |_| |_|                      #
#        |___/                      |___/                                  #
############################################################################

Actyrn or discord.gg/azuremodded or discord.gg/hUvujCnGMb
Original script credits go to Elegant and Weda
--]]

loadstring(game:HttpGet("https://raw.githubusercontent.com/Actyrn/Scripts/main/AzureModded"))()`;

  navigator.clipboard.writeText(fullScript).then(function() {
      alert("Script copied to clipboard!");
  }, function(err) {
      alert("Failed to copy text: ", err);
  });
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
  }
});

document.addEventListener("mousemove", function(event) {
  const image = document.querySelector('.image-container img');
  const rect = image.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((centerY - y) / centerY) * 5;
  const rotateY = ((x - centerX) / centerX) * 5;

  image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.3)`;
});
