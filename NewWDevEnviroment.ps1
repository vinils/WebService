Write-Host "installing chocolatey"
iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
Write-Host "Installing Git"
choco install -y --no-progress git
Write-Host "run cmd 'git config --global http.proxy 159.215.124.20:443' in a new cmd prompt"
pause
Write-Host "Installing VSCode"
choco install vscode -y --limit-output --no-progress --params "/NoDesktopIcon /NoQuicklaunchIcon /NoContextMenuFiles /NoContextMenuFolders"
Write-Host "Installing docker for windows"
#choco install -y --limit-output --no-progress docker-cli
choco install -y --limit-output --no-progress docker-for-windows
Write-Host "Installing NVM & Node"
choco install -y --limit-output --no-progress nvm
#start powershell -wait {nvm proxy 159.215.124.20:443}
#start powershell -wait {nvm install latest}
Write-Host "run those commands below in a new prompt"
Write-Host "nvm proxy 159.215.124.20:443"
Write-Host "nvm install latest"
Write-Host "nvm ls"
Write-Host "nvm use XX.XX.XX - changing XX.XX.XX for the version showing in the screen"
pause
#nvm ls
choco install -y --limit-output --no-progress yarn
