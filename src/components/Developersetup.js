import React from 'react';
import Header from './Header';
import './Welcome.css';
import Menuwithicons from './Menuwithicons';
function Developersetup() {
  return (
    <div>
      <Header />

      <div class="wel_side">
        <Menuwithicons />
      </div>
      <div class="wel-mid">
        <div class="wel_banner">Prerequisites</div>
        <div class="wel-main">
          <strong>Prerequisites</strong>
          <br />

          <p class="Markdown-module--paragraph--1xZR9 ">
            This section includes instructions on setting up prerequisites
          </p>
          <strong>Installing Homebrew for MacOS X</strong>
          <p class="Markdown-module--paragraph--1xZR9 ">
            For most of this page, if you have a Mac we will use Homebrew to
            install programs. If you haven’t already, to install Homebrew, open
            the Terminal app and run this command:
          </p>
          <br />
          <p class="Markdown-module--paragraph--1xZR9 ">
            /bin/bash -c "$(curl -fsSL
            https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
          </p>
          <br />
          <strong>Installing Node.js</strong>
          <p class="Markdown-module--paragraph--1xZR9 ">MacOS X</p>
          <br />
          <p class="Markdown-module--paragraph--1xZR9 ">
            For MacOS, we recommend to use nvm, the node version manager. This
            can allow you to have different versions of node installed at any
            one time on your system.
            <br />
            Note: If you’re using zsh you can easily install nvm as a zsh
            plugin. Install zsh-nvm and run nvm upgrade to upgrade.
            <br />
            To get started, ensure you have already installed Homebrew and run
            this in your Terminal:
            <br />
            brew install nvm <br />
            To verify installation:
            <br />
            command -v nvm <br />
            If the command line returns nvm, we’re in business! If it doesn’t,
            seek further help from the official nvm GitHub repository.
            <br />
            Now, to download, compile, and install the latest release of node,
            do this:
            <br />
            nvm install node # "node" is an alias for the latest version
            <br />
            And then in any new shell just use the installed version:
            <br />
            nvm use node
            <br />
            There are other usages of nvm, such as downloading a specific
            version of node, which can be read up on here.
            <br />
            For now, you can confirm you have node installed using <br />
            node -v && npm -v <br />
            Which should print out your node version and npm (node package
            manager) version.
            <br />
          </p>
          <strong>Windows</strong>
          <p class="Markdown-module--paragraph--1xZR9 ">
            Install from https://nodejs.org/en/download/{' '}
          </p>
          <br />

          <strong>Git and GitHub setup</strong>
          <br />
          <p class="Markdown-module--paragraph--1xZR9 ">
            Git is the number one source-code management tool. Since the iX
            Experience Orchestrator’s code is hosted on IBM’s GitHub, it is
            necessary to set up Git on your computer as well as enable GitHub
            access.
          </p>
          <br />

          <strong>Mac OS X</strong>
          <p class="Markdown-module--paragraph--1xZR9 ">
            Make sure you have installed Homebrew as mentioned above, then you
            can use it to install git:
            <br />
            brew install git
          </p>
          <br />

          <strong>Windows</strong>
          <br />
          <p class="Markdown-module--paragraph--1xZR9 ">
            Install git via the GUI installer available from
            https://git-scm.com/download/win <br />
            As you move through the menus, you have the opportunity to select
            your default text editor for use with git. We recommend you select
            VSCode, but you may choose whatever you are most comfortable with.
          </p>
          <br />

          <strong>Authenticating with IBM’s Enterprise GitHub</strong>
          <br />
          <p class="Markdown-module--paragraph--1xZR9 ">
            GitHub is the distribution platform for Git. iX Experience
            Orchestrator code is kept and maintained constantly on GitHub.
            <br />
            To use GitHub, you need to first create an IBM Enterprise GitHub
            account. You can do so from this website https://github.ibm.com/{' '}
            <br />
            You then need to link your computer to your GitHub account.
            <br />
            (Recommended) Authenticate with IBM’s Enterprise GitHub using
            Personal Access tokens
            <br />
            We recommend that both Mac and Windows users use a personal access
            token to authicate with IBM enterprise GitHub.
          </p>
          <br />

          <strong> To create a Personal Access (PA) token:</strong>
          <br />

          <p class="Markdown-module--paragraph--1xZR9 ">
            Login to IBM Enterprise GitHub <br />
            Go to Settings > Developer Settings > Personal Access Tokens <br />
            Click Generate New Token and name it appropriately e.g. with the
            name of your computer <br />
            Note down your token - it will only be displayed once! <br />
            Once you have a PA token, you can clone a repository, for example
            the front-end repo, via your terminal using https: <br />
            git clone https://github.ibm.com/ixliberty/ixl-frontend.git <br />
            You will be prompted to input your username and password. This is a
            one-time operation.
            <br />
            Enter your GitHub username as appropriate.
            <br />
            For the password, enter the full PA token you have just created.
            Once you have entered your password once, it will be managed by
            whatever credentials manager you are using. For Windows that will be
            Windows Credential Manager. For Mac it will be Keychain.
            <br />
            (Alternative) Authenticate with IBM’s Enterprise GitHub using SSH{' '}
            <br />
            We do not recommend SSH if you are a Windows user, but you can if
            you want to. For Mac users, you can set this up also if you want to
            instead of using https: <br />
            Instructions can be found from GitHub here:
            <br />
            https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh{' '}
            <br />
            Congrats, you are now set up to use git and GitHub
          </p>
        </div>
      </div>
    </div>
  );
}
export default Developersetup;
