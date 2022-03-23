CURRENT_DIR=`pwd`
TARGET_DIR=``
echo "LINKING LOCAL PACKAGE"

# Ask for the target directory
echo "Enter the target directory (e.g. /home/user/my_project):"
read TARGET_DIR

if [ ! -d $TARGET_DIR ]; then
    echo "Target directory does not exist"
    exit 1
fi

