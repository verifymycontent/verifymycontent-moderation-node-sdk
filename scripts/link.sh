PACKAGE_NAME="verifymycontent-video-moderation-typescript"
CURRENT_DIR=`pwd`
TARGET_DIR=``

# Ask for the target directory
echo "Enter the target directory (e.g. /home/user/my_project):"
read TARGET_DIR

if [ ! -d $TARGET_DIR ]; then
    echo "Target directory does not exist"
    exit 1
fi

echo "LINKING LOCAL PACKAGE"
cd $CURRENT_DIR && \
yarn link &&
cd $TARGET_DIR && \
yarn link verifymycontent-video-moderation-typescript