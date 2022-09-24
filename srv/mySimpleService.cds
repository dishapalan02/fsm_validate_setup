using myCompany.setup from '../db/company';
service  company{
    entity Company as projection on setup.Company

    action validateCrowdSettings( id : Company:id ) returns Company  ;
    
    
}
    