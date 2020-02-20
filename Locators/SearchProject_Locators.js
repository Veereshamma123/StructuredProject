module.exports=
{
    IntakeLoginPage: {
      
      crntPrjct_parent:"mat-tab-labels", 
      crntPrjct_child:"div:nth-child(2)",
      filter:"txt_FilterProjects",
      rows: "tbody tr",
     
      
    }
  }


  //Search functionality
	this.currentProjects=element(by.className("mat-tab-labels")).element(by.css("div:nth-child(2)"));
	this.filter=element(by.id('txt_FilterProjects'));
	this.rows=element(by.css("tbody tr"));
	this.allRows=element.all(by.css("tbody tr"));
	//this.secondColumn=element(by.css("td:nth-child(2)"));
	this.projectId=element(by.css("tbody tr td:nth-child(2)"));
	this.openIcon=element(by.id('dark-gray'));