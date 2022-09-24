using company from '../../../srv/mySimpleService';
annotate company.Company with @(
    
     UI: {
    SelectionFields: [ id,company_name],
    LineItem: [
      { $Type  : 'UI.DataFieldForAction',
      Action : 'company.EntityContainer/validateCrowdSettings',
      Label  : 'Validate Crowd Type'   },      
      {Value: id,
            Label:'id'},
      {Value: company_name,
            Label:'name'},
      {Value: description,
            Label:'description'}
    ],
  HeaderInfo: {
      TypeName: 'name', TypeNamePlural: 'Name',
      Title: { Value: company_name },
      Description: { Value: company_name }
    }
}
);