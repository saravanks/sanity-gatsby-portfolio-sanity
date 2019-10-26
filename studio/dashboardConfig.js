export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5db49f45e5617b4c22ee10f7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-sanity-studio',
                  apiId: 'b63603b1-71eb-48d6-9017-7553f6d37af8'
                },
                {
                  buildHookId: '5db49f45aac93ce28ba50c9c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-sanity',
                  apiId: 'f50b58da-fd9f-42fa-9534-64cd2ddc6dff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saravanks/sanity-gatsby-portfolio-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-sanity.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
