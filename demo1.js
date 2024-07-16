/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
addValidationsWorkbench("{ds}/Using_validation.valid");
navigateTo("https://demosite.appvance.net/");
click(fallback(`span(0, _in(div("product_1")))`,
   `span(0, _in(div({'id':'product_1'})))`,
   `span("Ruby on Rails Tote")`,
   `span("info")`,
   `span("Ruby on Rails Tote")`,
   `byXPath("//div[@id='product_1']/div/div[1]/a/span")`,
   `byXPath('//*[@class="info"]')`,
   `byXPath('//*[text()="Ruby on Rails Tote"]')`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div/div/a/span')`,
   `byXPath("id('product_1')/div[@class='panel panel-default']/div[@class='panel-body text-center product-body']/a[1]/span[@class='info']")`,
   `span({'itemprop':'name'})`,
   `byJQuery('span[title="Ruby on Rails Tote"]')`,
   `byJQuery('span[class="info"]')`,
   `byJQuery('.info')`));
click(fallback(`submit(0, _in(div("inside-product-cart-form")))`,
   `submit(0, _in(div({'id':'inside-product-cart-form'})))`,
   `byXPath('//*[@id="add-to-cart-button"]')`,
   `submit("btn btn-success[1]")`,
   `byXPath('//*[@name="button"]')`,
   `submit("add-to-cart-button")`,
   `submit("button")`,
   `submit("Add To Cart")`,
   `byXPath("//button[@id='add-to-cart-button']")`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div/div[2]/form/div/div/div[2]/div/span/button')`,
   `byXPath("id('add-to-cart-button')")`,
   `byJQuery('div[class="col-md-5"] > div[class="add-to-cart"] > div[class="input-group"] > span[class="input-group-btn"] > button[class="btn btn-success"]')`,
   `byJQuery('#add-to-cart-button')`,
   `byJQuery('button[name="button"]')`));
include("{ds}/demo_copY.ds");
//click(fallback(`link(0, _in(listItem("home-link")))`,
//   `link(0, _in(listItem({'id':'home-link'})))`,
//   `link("/[1]")`,
//   `link("Home")`,
//   `byXPath("//li[@id='home-link']/a")`,
//   `byXPath('//*[text()="Home"]')`,
//   `byXPath('/html/body/div/div/nav/div/ul/li/a')`,
//   `byXPath("id('home-link')/a[1]")`));
//click(fallback(`span(0, _in(div("product_3")))`,
//   `span(0, _in(div({'id':'product_3'})))`,
//   `span("Ruby on Rails Baseball Jersey")`,
//   `span("info[2]")`,
//   `span("Ruby on Rails Baseball Jersey")`,
//   `byXPath("//div[@id='product_3']/div/div[1]/a/span")`,
//   `byXPath('//*[text()="Ruby on Rails Baseball Jersey"]')`,
//   `byXPath('/html/body/div[2]/div/div/div/div[2]/div[3]/div/div/a/span')`,
//   `byXPath("id('product_3')/div[@class='panel panel-default']/div[@class='panel-body text-center product-body']/a[1]/span[@class='info']")`,
//   `byJQuery('span[title="Ruby on Rails Baseball Jersey"]')`));
//clickXY(fallback(`div(5, _in(div("inside-product-cart-form")))`,
//   `div(5, _in(div({'id':'inside-product-cart-form'})))`,
//   `div("input-group")`,
//   `div("Add To Cart[1]")`,
//   `byXPath("//div[@id='inside-product-cart-form']/div[2]/div[2]/div")`,
//   `byXPath('//*[@class="input-group"]')`,
//   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div/div[2]/form/div/div[2]/div[2]/div')`,
//   `byXPath("id('inside-product-cart-form')/div[@class='col-md-5']/div[@class='add-to-cart']/div[@class='input-group']")`,
//   `byJQuery('div[class="row"] > div[class="col-md-5"] > div[class="add-to-cart"] > div[class="input-group"]')`,
//   `byJQuery('#inside-product-cart-form > .col-md-5 > .add-to-cart > .input-group')`),"292,8");
//click(fallback(`submit(1, _in(form("update-cart")))`,
//   `submit(1, _in(form({'id':'update-cart'})))`,
//   `byXPath('//*[@id="checkout-link"]')`,
//   `submit("btn btn-lg btn-success")`,
//   `byXPath('//*[@name="checkout"]')`,
//   `submit("checkout-link")`,
//   `submit("checkout")`,
//   `submit("Checkout")`,
//   `byXPath("//button[@id='checkout-link']")`,
//   `byXPath('//*[@class="btn btn-lg btn-success"]')`,
//   `byXPath('/html/body/div[2]/div/div/div/div/form/div/div[2]/div/button[2]')`,
//   `byXPath("id('checkout-link')")`,
//   `byJQuery('div[class="links col-md-3 navbar-form pull-right text-right"] > div[class="form-group"] > button[class="btn btn-lg btn-success"]')`,
//   `byJQuery('#checkout-link')`,
//   `byJQuery('button[name="checkout"]')`));
