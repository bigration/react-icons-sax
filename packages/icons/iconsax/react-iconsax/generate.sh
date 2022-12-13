#!/bin/bash
set -e
LIB_PATH=$(pwd)
echo "PATH $LIB_PATH"

GEN_PATH=packages/icons/iconsax/react-iconsax/src/icons
ICONS_SOURCE_PATH=packages/icons/iconsax/iconsax-assets/src/lib/icons
CONFIG_FILE=packages/icons/iconsax/react-iconsax/generator/svgr-config.json
TEMPLATE_FILE=packages/icons/iconsax/react-iconsax/generator/svg-template.js
INDEX_TEMPLATE_FILE=packages/icons/iconsax/react-iconsax/generator/index-template.js
SVGO_FILE=packages/icons/iconsax/react-iconsax/generator/svgo.config.js

echo "removing old gen $GEN_PATH"

rm -Rf $GEN_PATH

echo "removing metadata"

rm -Rf $LIB_PATH/packages/icons/iconsax/react-iconsax/generator/metadata/*

MAIN_INDEX_ARRAY=()

npx @svgr/cli -d $GEN_PATH/Arrow $ICONS_SOURCE_PATH/Arrow --config-file $CONFIG_FILE --template $TEMPLATE_FILE --index-template $INDEX_TEMPLATE_FILE --svgo-config $SVGO_FILE

for dir in packages/icons/iconsax/iconsax-assets/src/lib/icons/*/; do
  dir2=${dir%/}    # Remove the trailing /
  dir3=${dir2##*/} # Remove everything up to, and including, the last /
  npx @svgr/cli -d $GEN_PATH/$dir3 $ICONS_SOURCE_PATH/$dir3 --config-file $CONFIG_FILE --template $TEMPLATE_FILE --index-template $INDEX_TEMPLATE_FILE

  for nested in $dir2/vuesax/*/; do
    nested2=${nested%/}    # Remove the trailing /
    nested3=${nested2##*/} # Remove everything up to, and including, the last /
    MAIN_INDEX_ARRAY+=("export * from './icons/$dir3/vuesax/$nested3';")
  done
done

echo "Post processing"
node $LIB_PATH//packages/icons/iconsax/react-iconsax/generator/icons-post-processing.js
MAIN_INDEX_ARRAY+=("export {metadata} from './metadata';")

printf '%s\n' "${MAIN_INDEX_ARRAY[@]}" > $LIB_PATH/packages/icons/iconsax/react-iconsax/src/index.ts
