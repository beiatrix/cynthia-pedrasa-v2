export default S =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('About Me')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
            .title('About Me')
        ),
      ...S.documentTypeListItems().filter(listItem => !['about'].includes(listItem.getId()))
    ])
