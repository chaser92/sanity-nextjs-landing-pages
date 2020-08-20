export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3ed85aec56966e100f72fd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t3a1vcqk',
                  apiId: '83fe209b-8176-4383-9977-1edc6ea843e9'
                },
                {
                  buildHookId: '5f3ed85a05af3b1cdce678b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mpp9mruv',
                  apiId: '76743fbe-034d-4ab2-84ff-148fd0005453'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chaser92/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mpp9mruv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
