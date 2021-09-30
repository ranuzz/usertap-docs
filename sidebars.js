/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //gleanerSidebar: [{type: 'autogenerated', dirName: '.'}],
  gleanerSidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Setting Up',
      items: ['signup', 'signin', 'embed-gleaner', 'account-limits']
    },
    {
      type: 'category',
      label: 'Feeder',
      items: ['what-is-a-feeder', 'types-of-feeder', 'uderstanding-feeder-data', 'feeder-positioning']
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: ['use-case-blogs', 'use-case-publishing', 'use-case-newlaunch', 'use-case-onboarding']
    }
  ],

};