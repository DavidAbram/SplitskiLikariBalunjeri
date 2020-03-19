import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import MembersPagePreview from './preview-templates/MembersPagePreview';
import VisionPagePreview from './preview-templates/VisionPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('members', MembersPagePreview);
CMS.registerPreviewTemplate('vision', VisionPagePreview);
