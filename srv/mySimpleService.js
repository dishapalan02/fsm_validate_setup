//this code is same as above but with arrow(=>) function

module.exports = srv => {

  srv.before("validateCrowdSettings", req => {

    const data = 'grant_type=client_credentials&username=evorait/TECHNIKER1&password=FSMcloud!1'
    const url = 'https://auth.coresuite.com/api/oauth2/v1/token'

    const response = fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic NGE4M2RlMjYtZjhmMy00OTkxLTlmNTItZmZlMmIzZTA4NzVlOjAzMjgxODI1LWE4MWYtNDBhNC1iOGJlLWExOTQ1ZmMyOGI2MQ=='
      },
      body: data // body data type must match "Content-Type" header
    });

    access_token = response.then(function (resp) {
      console.log("Response: " + resp)
      let access_token = resp.json().then(function (resp_data) {
        console.log("DataType: " + typeof (resp_data.access_token))
        let access_token = resp_data.access_token
        return req.reply({ access_token });
      })
      return access_token
    },
      function () {
        console.log("error")
        return req.error("error");
      })
    return access_token; // parses JSON response into native JavaScript objects

  })

  srv.on("validateCrowdSettings", req => {

    const bearer_token = 'Bearer ' + req.results.access_token
    const url = 'https://de.coresystems.net/admin/accounts/89975/companies/' + req.data.id
    const response = fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer 2Hic5IDL8jrR50Sc8lkmG36E4j8',
        'Cookie': 'SESSION=ZDc0ODcxYjYtMWRlZC00MDhmLWE3YjktMWU3N2EzM2M1NWVl; dtCookie=v_4_srv_26_sn_07C071C5D91B7986D2EC6563017C4AFD_perc_100000_ol_0_mul_1_app-3A9ae507a16912e47b_1; rxVisitor=1659356177050BK4HN9DDVRCHC15MT8QN44PLNKG6UETE; dtSa=-; dtLatC=1; rxvt=1659419848080|1659418048080; dtPC=26$356293991_598h-vRPAUELUCJOHTOBHVBILBHHQFFNCCPWVH-0e0'
      }
    });

    response_data = response.then(function (resp) {
      console.log("Response: " + resp)
      console.log("DataType: " + typeof (resp))
      let response_data = resp.text().then(function (resp_data) {
        console.log("DataType: " + typeof (resp_data))


        var parser = require('node-html-parser').parse
        const doc = parser(resp_data);
        
        req.data.id = doc.getElementById("id").innerHTML;
        req.data.company_name = doc.getElementById("name").innerHTML;
        req.data.description = doc.getElementById("description").innerHTML;
        req.data.type = doc.getElementById("type").innerHTML;
        req.data.crowdType = doc.getElementById("crowdType").innerHTML;

        //console.log("Crowd Type = " + crowdType);
        
        return req.data
      })
      return response_data
    },
      function () {
        console.log("error")
        return req.error("error");
      })
    return response_data; // parses JSON response into native JavaScript objects


  })
}

