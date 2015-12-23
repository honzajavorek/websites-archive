#!/bin/bash

httrack 'http://honzajavorek.cz' -O './cache/honzajavorek.cz' '+fonts.google*.com/*' -v
httrack 'http://javorek.net' -O './cache/javorek.net' '+fonts.google*.com/*' -v
httrack 'http://taborprekvapeni.cz' -O './cache/taborprekvapeni.cz' '+img*.rajce.idnes.cz/*' '+fonts.googleapis.com/*' -v
httrack 'http://prazeni.tumblr.com' -O './cache/prazeni.tumblr.com' '+*assets.tumblr.com*' '+*media.tumblr.com*' -v
httrack 'http://zenakteranikdyneexistovala.tumblr.com' -O './cache/zenakteranikdyneexistovala.tumblr.com' '+*assets.tumblr.com*' '+*media.tumblr.com*' -v
httrack 'http://bakinovyzazitky.blogspot.cz' -O './cache/bakinovyzazitky.blogspot.cz' '+*blogger.com/profile*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*' -v
httrack 'http://hrosizivot.blogspot.cz' -O './cache/hrosizivot.blogspot.cz' '+*blogger.com/profile*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*' -v
httrack 'http://zuzikovakultura.blogspot.cz' -O './cache/zuzikovakultura.blogspot.cz' '+*blogger.com/profile*' '+*bp.blogspot.*' '+*blogger.com*.css*' '+*blogger.com*.js*' -v

rsync -av ./cache ./build --delete --exclude 'hts-cache'
echo "Tady je archiv." > ./build/index.html
echo "User-Agent: *\nDisallow: /" > ./build/robots.txt

ghp-import -p ./build
