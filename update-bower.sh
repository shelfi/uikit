#!/bin/bash
VERSION=$1

if [ ! $VERSION ]; then
	echo "Usage: sh $0 <version>"
	exit 1;
fi

echo "Update bower-uikit version to v$VERSION"
gulp build

if [ -d bower-uikit/ ]; then
	echo "bower-uikit directory found."
	cd bower-uikit
	git pull origin master
	echo "Repository pulled from source."
else
	echo "bower-uikit directory not found."
	git clone https://github.com/shelfi/bower-uikit
	echo "Repository cloned from source."
	cd bower-uikit
fi

cp ../dist/uikit/scripts/uikit.js shelfi-uikit.js
cp ../dist/uikit/styles/uikit.css shelfi-uikit.css

git add -A
git commit -m "Release v$VERSION"
git tag "v$VERSION"
git push origin master

#bower register shelfi-form-builder git://github.com/shelfi/bower-form-builder.git
echo "Succesfully"