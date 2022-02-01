# Webfont generering

Alle svg ikoner fra svg mappen vil bli automatisk prosessert og fonter vil bli generert.
I tillegg vil konfigurasjonsfil for icons-ske bli regenerert med alle glyphs/unicodes.

Fluent har faste navn på noen ikoner som benyttes av komponenter (f.eks. Messagebar). Disse aliasene ligger i utils/icons/icons-alias. Husk å dobbeltsjekke/oppdatere disse referansene når du genererer ny ikon-fil.

Dersom listen over ikoner blir lagt inn i filen utils/icons/icons-ske.js , må du flytte den over over i .ts-filen. Kopier listen med ikoner fra icons-ske.js over i filen med icons-ske.ts og slett icons-ske.js.
