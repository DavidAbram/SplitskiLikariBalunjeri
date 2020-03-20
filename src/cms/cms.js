import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import MembersPagePreview from './preview-templates/MembersPagePreview';
import VisionPagePreview from './preview-templates/VisionPagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import NotificationsPreview from './preview-templates/NotificationsPreview';
import ActivitiesPreview from './preview-templates/ActivitiesPreview';
import HeaderPreview from './preview-templates/HeaderPreview';
import FooterPreview from './preview-templates/FooterPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('members', MembersPagePreview);
CMS.registerPreviewTemplate('vision', VisionPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('notifications', NotificationsPreview);
CMS.registerPreviewTemplate('activities', ActivitiesPreview);
CMS.registerPreviewTemplate('header', HeaderPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
