cd ~/Sites

alias r="rails"
alias my="mysql.server start"
alias profile="mate ~/.profile"
alias slice="ssh -p 22223 deploy@integrated-internet.com"
alias srv="script/server"

# cd
alias ..='cd ..'
# ls
alias ls="ls -F"
alias l="ls -lAh"
alias ll="ls -l"
alias la='ls -A'
# git
alias gl='git pull'
alias gp='git push'
alias gpom='git push origin master'
alias gd='git diff'
alias gc='git commit'
alias gca='git commit -a'
alias gco='git checkout'
alias gb='git branch'
alias gs='git status'
alias grm="git status | grep deleted | awk '{print \$3}' | xargs git rm"
alias pull='git pull origin master'
# rails
alias sc='script/console'
alias ss='script/server'
alias sg='script/generate'
alias a='autotest -rails'
alias tlog='tail -f log/development.log'
alias scaffold='script/generate nifty_scaffold'
alias migrate='rake db:migrate db:test:clone'
alias rst='touch tmp/restart.txt'

parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export PS1="\[\033[01;34m\] \w \[\033[31m\]\$(parse_git_branch) \[\033[00m\]$\[\033[00m\] "

alias du="du -hs * | sort"

# function srv(){
# if [[ `ps -ef | grep "mysql/5.1.54/bin/mysqld" | grep -v root` -eq 0 ]]
# then
# 	echo mysql running
# else
# 	echo mysql not running
# 	mysql.server start
# fi
# script/server
# }