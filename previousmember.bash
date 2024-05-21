# 'practice', 'nextmember.bash', 'previousmember.bash' を除外してアーカイブを作成
tar --exclude='practice' --exclude='nextmember.bash' --exclude='previousmember.bash' --exclude='contents.tar.gz' -czvf contents.tar.gz .

# アーカイブの権限を変更
chmod 777 contents.tar.gz

# 除外したファイル・ディレクトリを残して他を削除
find . -mindepth 1 -not -name 'practice' -not -path './practice/*' -not -name 'contents.tar.gz' -not -name 'nextmember.bash' -not -name 'previousmember.bash' -exec rm -rf {} +
