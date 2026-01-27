/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/quickstart',
        'getting-started/docker-concepts',
      ],
    },
    {
      type: 'category',
      label: 'Language Guides',
      items: [
        'language-guides/overview',
        'language-guides/javascript',
        'language-guides/python',
        'language-guides/java',
        'language-guides/go',
        'language-guides/other-languages',
      ],
    },
    {
      type: 'category',
      label: 'AI & Machine Learning',
      items: [
        'ai-ml/overview',
        'ai-ml/agentic-ai',
        'ai-ml/data-science',
      ],
    },
    {
      type: 'category',
      label: 'DevOps & Cloud',
      items: [
        'devops/overview',
        'devops/ci-cd',
        'devops/kubernetes',
        'devops/cloud-platforms',
      ],
    },
    {
      type: 'category',
      label: 'Learning Paths',
      items: [
        'learning-paths/developers',
        'learning-paths/devops-engineers',
        'learning-paths/security-engineers',
        'learning-paths/ai-ml-engineers',
      ],
    },
    {
      type: 'doc',
      id: 'additional-resources',
      label: 'Additional Resources',
    },
  ],
};

module.exports = sidebars;
