# ! ───────────── VARIABLES ─────────────
FMT_BOLD="\[\e[1m\]"
FMT_DIM="\[\e[2m\]"
FMT_RESET="\[\e[0m\]"
FMT_UNBOLD="\[\e[22m\]"
FMT_UNDIM="\[\e[22m\]"
FG_BLACK="\[\e[30m\]"
FG_BLUE="\[\e[34m\]"
FG_CYAN="\[\e[36m\]"
FG_GREEN="\[\e[32m\]"
FG_GREY="\[\e[37m\]"
FG_MAGENTA="\[\e[35m\]"
FG_RED="\[\e[31m\]"
FG_WHITE="\[\e[97m\]"
BG_BLACK="\[\e[40m\]"
BG_BLUE="\[\e[44m\]"
BG_CYAN="\[\e[46m\]"
BG_GREEN="\[\e[42m\]"
BG_MAGENTA="\[\e[45m\]"

hbar="─"
vbar="│"
tl_corn="┌"
tr_corn="┐"
bl_corn="└"
br_corn="┘"

# ! ───────────── ALIASES ─────────────
alias ..='cd ..'

# ! ───────────── TERMINAL ─────────────
PS1_TOP="\n${FG_BLUE}${tl_corn}${hbar}" # begin arrow to prompt
PS1_TOP+="${BG_BLUE}${FMT_BOLD}${FG_WHITE} 👤 \u " # print username
PS1_TOP+="${FMT_UNBOLD}${BG_CYAN}${FG_WHITE} 📂 \w " # print directory
PS1_TOP+="${BG_MAGENTA}${FG_WHITE}" # preparing branch space
inside_git_repo="$(git rev-parse --is-inside-work-tree 2>/dev/null)"

if [ "$inside_git_repo" ]; then
    branch_name=$(git symbolic-ref -q HEAD)
    branch_name=${branch_name##refs/heads/}
    branch_name=${branch_name:-HEAD}
    PS1_TOP+=" 🌿 (${branch_name}) " 
else
    PS1_TOP+=" 🚀 "
fi
PS1_TOP+="${FMT_RESET}\n" # end last container

PS1_MIDDLE="${FG_BLUE}${vbar}\n"

PS1_BOTTOM="${FG_BLUE}${bl_corn}${hbar}" # end arrow to prompt
PS1_BOTTOM+="${FG_WHITE}${BG_BLUE}${FMT_BOLD} → " # print prompt
PS1_BOTTOM+="${FMT_RESET}${FG_WHITE} "

PS1=${PS1_TOP}${PS1_MIDDLE}${PS1_BOTTOM}
export PS1