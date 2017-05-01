import { createRouter, logger } from 'meteor/ssrwpo:ssr';
import {Mainlayout} from '/imports/ui/Layouts/MainLayout';

console.log(Mainlayout);

createRouter({MainApp: MainLayout})
.then(() => logger.info('Router started'));