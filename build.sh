#!/bin/bash

UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:43.0) Gecko/20100101 Firefox/43.0'

httrack -viC2 '-%s' 'honzajavorek.cz' -O './cache/honzajavorek.cz' '+fonts.google*.com/*' -F "$UA"
httrack -viC2 '-%s' 'javorek.net' -O './cache/javorek.net' '+fonts.google*.com/*' -F "$UA"
httrack -viC2 '-%s' 'www.taborprekvapeni.cz' -O './cache/taborprekvapeni.cz' '+img*.rajce.idnes.cz/*' '+fonts.googleapis.com/*' -F "$UA"
httrack -viC2 '-%s' 'prazeni.tumblr.com' -O './cache/prazeni.tumblr.com' '+*assets.tumblr.com*' '+*media.tumblr.com*' -F "$UA"
httrack -viC2 '-%s' 'zenakteranikdyneexistovala.tumblr.com' -O './cache/zenakteranikdyneexistovala.tumblr.com' '+*assets.tumblr.com*' '+*media.tumblr.com*' -F "$UA"
httrack -viC2 '-%s' 'bakinovyzazitky.blogspot.cz' -O './cache/bakinovyzazitky.blogspot.cz' '-*draft.blogger.com*' '-*.google.com/*' '-*/search*' '+*blogger.com/profile/*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*' -F "$UA"
httrack -viC2 '-%s' 'hrosizivot.blogspot.cz' -O './cache/hrosizivot.blogspot.cz' '-*draft.blogger.com*' '-*.google.com/*' '-*/search*' '+*blogger.com/profile/*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*' -F "$UA"
httrack -viC2 '-%s' 'zuzikovakultura.blogspot.cz' -O './cache/zuzikovakultura.blogspot.cz' '-*draft.blogger.com*' '-*.google.com/*' '-*/search*' '+*blogger.com/profile/*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*' -F "$UA"
httrack -viC2 '-%s' 'blog.petrnohejl.cz' -O './cache/blog.petrnohejl.cz' '+fonts.google*.com/*' -F "$UA"
httrack -viC2 '-%s' 'janie.8bit.cz' -O './cache/janie.8bit.cz' '+fonts.google*.com/*' -F "$UA"
httrack -viC2 '-%s' 'blog.michalsvec.cz' -O './cache/blog.michalsvec.cz' -F "$UA"

rsync -av ./cache/* ./build --delete --exclude=hts-cache --exclude=hts-log.txt --exclude=hts-in_progress.lock
echo "Tady je archiv." > ./build/index.html
echo "User-Agent: *\nDisallow: /" > ./build/robots.txt

ghp-import -p ./build
