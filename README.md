# ConvertaImg
App made using Electron, HTML, CSS, JS, and Sharp that converts images of any file type (supported by Sharp) to png (with options for other file formats coming later).
Made because I kept getting webp images off google and neither photoshop or blender support webp natively at the time of this writing. Changing the format through renaming doesn't work so I thought this would be a good project.

You can select and drop multiple images at once and the app will create png versions of each in the same directory with the suffix \_ImageConverter.
Button to toggle always on top for convenience.

Also implemented a workaround to be able to drag the app from the very top in fullscreen. While not necessary for this type of app it was just something I noticed and I thought it would be good to fix it. Other Electron and Chromium based apps such as Discord and Steam suffer from this at the time of this writing.



Todo:
- Ability to select output directory and append custom suffix/prefix to converted images.
- Loading animation and progress indicator once files are dropped.
- Support for converting folders and nested folders of images.
- Different format options for output.
- Ability to limit input formats, i.e. you want to convert only webps in a folder with mixed formats.
- Compression and resize options.
- Experiment with animations and visuals once more features are implemented.

Minor: 
- Alt/Title text for always on top button. Possibly add tooltips.
