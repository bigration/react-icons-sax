#!/bin/bash

set -e
LIB_PATH=$(pwd)
echo "PATH $LIB_PATH"

for dir in $LIB_PATH/src/lib/icons/*/; do
  dir2=${dir%/}    # Remove the trailing /
  dir3=${dir2##*/} # Remove everything up to, and including, the last /
  target=${dir3//[- ()@$]/""}

  if [ "$dir3" != "$target" ]; then
    mv "$LIB_PATH/src/lib/icons/${dir3}" "$LIB_PATH/src/lib/icons/${target}"
  fi

done

for svg in $(find $LIB_PATH/src/lib/icons/ -type f -name '*svg'); do

  fileDir=${svg%/*}

  fileName="$(basename -- $svg)"
  target=${fileName//[ ()@$&]/""}

  if [ "$fileName" != "$target" ]; then
      mv "$fileDir/${fileName}" "$fileDir/${target}"
  fi

done
