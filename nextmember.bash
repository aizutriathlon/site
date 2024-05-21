tar -xzvf contents.tar.gz
find . -mindepth 1 -not -name 'practice' -not -path './practice/*' -exec chmod 755 {} +
rm contents.tar.gz