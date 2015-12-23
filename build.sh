#!/bin/bash

httrack -viC2 '-%s' 'honzajavorek.cz' -O './cache/honzajavorek.cz' '+fonts.google*.com/*'
httrack -viC2 '-%s' 'javorek.net' -O './cache/javorek.net' '+fonts.google*.com/*'
httrack -viC2 '-%s' 'www.taborprekvapeni.cz' -O './cache/taborprekvapeni.cz' '+img*.rajce.idnes.cz/*' '+fonts.googleapis.com/*'
httrack -viC2 '-%s' 'prazeni.tumblr.com' -O './cache/prazeni.tumblr.com' '+*assets.tumblr.com*' '+*media.tumblr.com*'
httrack -viC2 '-%s' 'zenakteranikdyneexistovala.tumblr.com' -O './cache/zenakteranikdyneexistovala.tumblr.com' '+*assets.tumblr.com*' '+*media.tumblr.com*'
httrack -viC2 '-%s' 'bakinovyzazitky.blogspot.cz' -O './cache/bakinovyzazitky.blogspot.cz' '-*draft.blogger.com*' '-*.google.com/*' '-*/search*' '+*blogger.com/profile/*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*'
httrack -viC2 '-%s' 'hrosizivot.blogspot.cz' -O './cache/hrosizivot.blogspot.cz' '-*draft.blogger.com*' '-*.google.com/*' '-*/search*' '+*blogger.com/profile/*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*'
httrack -viC2 '-%s' 'zuzikovakultura.blogspot.cz' -O './cache/zuzikovakultura.blogspot.cz' '-*draft.blogger.com*' '-*.google.com/*' '-*/search*' '+*blogger.com/profile/*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*'

rsync -av ./cache/* ./build --delete --exclude=hts-cache --exclude=hts-log.txt --exclude=hts-in_progress.lock
echo "Tady je archiv." > ./build/index.html
echo "User-Agent: *\nDisallow: /" > ./build/robots.txt

ghp-import -p ./build
