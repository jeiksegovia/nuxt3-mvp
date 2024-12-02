WSL lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows,  unmodified, without the overhead of a traditional virtual machine or dual-boot setup. 

# Setup 

Activating WSL 

You can activate WSL using the command line, or using the UI. 

## Command Line 

Open Power-shell as an administrator and run: 

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows Subsystem-Linux /all /norestart
```

Finally Restart the system. 
## UI Steps 

Press Windows-Key and type Turn Windows features on or off. 

Check Virtual Machine Platform and Windows Subsystem for Linux. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcfs90WczGF9fjFoL1DeM6UksT0Wi1wrsWkgstAOd4S-wDzAMwiUtjdYlLR7qm4-YmVn7MhQDrAsFGOwLaJAo0hb-nfKEqdp-27jOlRgxXf8CoG-lTGXGFwycUQkHq1f9GKEfAqAP_yGeJSvEK80VwUfvg?key=akOc52uRImj9Ue0khmzRVzfj)

Press OK and Restart the system. 

## Installing Ubuntu distro

Go to Windows Store, and search for Ubuntu, an item called Ubuntu 20** ro 22**.![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcAVSle1B1tYDzvb-1aDM8HuUJyiB2Uo5_VHmT934fvouHz6zPgJCHTMtDErtkdc9aolRtolqkUDx9rTKEEn75T8S1KHEeqAi8MYQmyX8NZI8HwPtTXiVks5n1Knk9N1Fc0Y3Vs3jkvj496FWDzNXjR2g?key=akOc52uRImj9Ue0khmzRVzfj)

Sometimes Windows Store shows an error the first time you open it. If that happens, you need to add your Microsoft/hotmail/outlook Account under Email &  Accounts. Press Windows key, type Email & Accounts and complete the login process.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4P-mdb2F-WSiX72pg-_AcAjxiCqqOHzeumuKbWZCs1SYKT7l1gYOesODkvfHZMjA7fMo89XKssB-WhLbbQVkGUZ-gEVNBucUWTCAP8oGU9mW2SynaOAZXhP4T9UHYpR7TK3ari6Y3dOOSIAv-7FXb2jw?key=akOc52uRImj9Ue0khmzRVzfj)

# First-run 

On power-shell

```powershell
wsl --update
wsl --set-default-version 2
wsl --status
```


Press Windows key, type “Ubuntu” and select the first app [Ubuntu]. If you are on the Windows Store click over “Launch” button. It will take a while and then ask you to create a user.

### Create Your User

It is Not Recommended to use the`root`, it's going to give you a hard time when installing packages or running scripts. **Create your administrator user**.

**Create a Linux** user following the steps shown on the console the first time you launch it. Select the new-user name, use a Simple short password.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfdQXBZv65T7WzFfWR8gzACM1XCXJSGwqFj4sF5E_eA27M_hQFBqAZvStDdE8DyQfPc8l-YU0swiWZ9H6kbIbg2s-UrJVEIvfV_obyzjXI0SHK0ZAD-ilizbeTP6a5PlafPIph_xjJDwVylZuH5Abmj1EI?key=akOc52uRImj9Ue0khmzRVzfj)

# Install basic tools !
On windows powershell run
```powershell
ubuntu -c "whoami"
```

You should NOT se `root@*` in the terminal.

![](/docs/doc-assets/no-root.png)

if so, you should create an administrator user, or set the your-user user as the default one.

```powerShell
ubuntu config --default-user <your-user>
```

if you need to create a user, follow [this guide ](https://www.tenforums.com/tutorials/128052-add-user-windows-subsystem-linux-wsl-distro-windows-10-a.html)
## Initial update & upgrade 

```bash
# Not with the root@ user run the following commands.
sudo apt update && sudo apt upgrade 
sudo apt-get update
```

### Install essentials 

```bash
sudo apt-get install git g++ build-essential
```
####  Instal l zsh & powerlevel10k  (Optional)
```bash
sudo apt install zsh -y
# make zsh default, close terminal, open again.
chsh -s $(which zsh)
# close the current teminal
exit
# opne a new terminal
# install utilities
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
# close the current teminal
exit
# open new terminal
# Finish the setup process
```

Setup process looks like this:
![](/docs/doc-assets/zsh-setup.png)
  
### Install brew & node 

```bash
# brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# configure brew
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# instal gcc
brew install gcc

# check brew
brew doctor

# install node
brew install node

node -v
npm -v
```

### Install Yarn with npm 

```bash
npm install -g yarn
```
  

# Installing VScode for working “remotely with WSL” 

VScode offers a very nice integration with WSL. It allows you to edit files/directories, and also use the linux terminal to develop as you could do it  on linux. 

Install VSCode from [here](https://code.visualstudio.com/download). You can use it to code connected to the WSL. 


Open VScode and install the WSL extension: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl#:~:text=The Remote - WSL extension lets,as you would  from Windows. 

If using WSL, the extensions will be installed in the Linux machine. VSCode will handle this transparently. 

You can see in the bottom right corner [WSL:Ubuntu] label. That indicated you are connected to a remote Linux session. You will be able to run  terminal commands and create debug sessions directly from vscode-teminal.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdjtqbNgEomlFj1bnWRxv4aJsa08DNasL5uoX8wG3Gr7zn7FNLYmsllbm2Wgl22QMaPenV1en_vYdsBMCx3_gAuJclJ8ZCCJCIb33XK2ZbTPWrevp6UKZsSwOCKlKwrM8LjNhzQoXoyIutNa9aWJORruEE?key=akOc52uRImj9Ue0khmzRVzfj)

### Key commands  

Open ubuntu `wsl` from the windows search box. Then:

```bash
cd /home/user-name #Where username is the user you picked for your  ubuntu. 
cd ~/

git clone your_repo # If you haven’t cloned it yet 

code ./my-folder # Open a folder in VSCode
```

### Open Windows Explorer and VScode using Linux terminal 

Enter this command in your current directory

```bash
explorer.exe .
```

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdLVeIKYMgPzdq5MmQZioE4LfXy0gpE8j_pdpWlTMKCFTt1P0n52An6RbWPEDuF5UDA29sxSEPt1K9LZhRMZn3LH-tZgcQC8IgvahByOJo0eGQ-Au5h569lXFAo8KX9Sspv4Cwh4ZnsxENI6ruTKRUJrCk?key=akOc52uRImj9Ue0khmzRVzfj)

To open vscode on the current ubuntu folder

```bash
# from ubuntu terminal, you can open vscode.
code .
```

