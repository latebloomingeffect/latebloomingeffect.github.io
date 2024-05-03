/*
-------------------------------------------------------------------
book chapters access script of the Late Blooming Effects Studio website
-------------------------------------------------------------------
*/
//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess;
var bookChapter1BgOpacity1=0;
var bookChapter1BgOpacity2=1;

//Variables required to manipulate the Book Menu element
var bookMenuAccess;
var bookMenuOpacity1=1;
var bookMenuOpacity2=0;

//Variables required to manipulate the Book Overview element
var bookOverviewAccess;
var bookOverviewOpacity1=1;
var bookOverviewOpacity2=0;

//Variables required to manipulate the Book Title element
var bookTitleAccess;
var bookTitleTop1=0;
var bookTitleTop2=-52;

//Variables required to manipulate the Chapter 1 element
var chapter1Access;
var chapter1Opacity1=0;
var chapter1Opacity2=1;

//Variables required to reset the property values of the elements
var isSiteAnimated1=false;
var isSiteAnimated2=false;

//Variables required to manipulate the Site Header element
var siteHeaderAccess;

var siteHeaderAnimate1;
var siteHeaderAnimate2;

var siteHeaderFontSize1=28;
var siteHeaderFontSize2=4.34;

var siteHeaderMargin1=155;
var siteHeaderMargin2=344.28;

var siteHeaderOpacity1=1;
var siteHeaderOpacity2=0;

var siteHeaderPadding1=25;
var siteHeaderPadding2=4.72;

var siteHeaderWidth1=430;
var siteHeaderWidth2=93;

/*
-------------------------------------------------------------------
Book Setup Function:
This function will link the required variables created in the script
to the elements found in the drico mistic page 
-------------------------------------------------------------------
*/
function bookSetup1()
{
	//link the book chapter 1 bg variable to the book chapter 1 bg 
	//element
	bookChapter1BgAccess=document.getElementById("bookChapter1Bg");
	bookChapter1BgAccess.addEventListener("click",animateSiteHeader2,false);
	
	//link the book title variable to the book title element
	bookTitleAccess=document.getElementById("bookTitle");
	bookTitleAccess.addEventListener("click",animateSiteHeader1,false);
}

/*
-------------------------------------------------------------------
Animate Site Header 1 Function:
This function will initiate the animation process for hiding the 
site header element
-------------------------------------------------------------------
*/
function animateSiteHeader1()
{
	siteHeaderAnimate1=window.setInterval(hideSiteHeader,15);
}

/*
-------------------------------------------------------------------
Animate Site Header 2 Function:
This function will initiate the animation process for showing the 
site header element
-------------------------------------------------------------------
*/
function animateSiteHeader2()
{
	animateSiteHeader2=window.setInterval(showSiteHeader,15);
}

/*
-------------------------------------------------------------------
Hide Site Header Function:
This function will arrange the property values of the elements that
will be mentioned below in a manner that will hide the site header
element and its background.

1.	Site Header Element 
2.	Book Title Element
3.	Book Overview Element
4.	Book Menu Element
-------------------------------------------------------------------
*/
function hideSiteHeader()
{
	//link required variables to the required elements
	bookChapter1BgAccess=document.getElementById("bookChapter1Bg");
	bookMenuAccess=document.getElementById("bookMenu");
	bookOverviewAccess=document.getElementById("bookOverview");
	bookTitleAccess=document.getElementById("bookTitle");
	
	chapter1Access=document.getElementById("chapter1");
	
	siteHeaderAccess=document.getElementById("siteHeader");
	
	//Access required site header property values for manipulation
	bookChapter1BgAccess.style.display="block";
	bookChapter1BgAccess.style.opacity=bookChapter1BgOpacity1;
	
	bookMenuAccess.style.opacity=bookMenuOpacity1;
	
	bookOverviewAccess.style.opacity=bookOverviewOpacity1;
	
	bookTitleAccess.style.top=bookTitleTop1+"px";
	
	chapter1Access.style.display="block";
	chapter1Access.style.opacity=chapter1Opacity1;
	
	siteHeaderAccess.style.fontSize=siteHeaderFontSize1+"px";
	siteHeaderAccess.style.margin="0px "+siteHeaderMargin1+"px";
	siteHeaderAccess.style.opacity=siteHeaderOpacity1;
	siteHeaderAccess.style.padding="1px "+siteHeaderPadding1+"px";
	siteHeaderAccess.style.width=siteHeaderWidth1+"px";
	
	if(siteHeaderWidth1<=93)
	{
		bookMenuOpacity1-=0.01;
		
		bookOverviewOpacity1-=0.01;
		
		siteHeaderFontSize1=4.34;
		siteHeaderMargin1=344.28;
		siteHeaderOpacity1-=0.01;
		siteHeaderPadding1=4.72;
		siteHeaderWidth1=93;
		
		if(siteHeaderOpacity1<=0)
		{
			bookMenuOpacity1=0;
			bookMenuAccess.style.display="none";

			bookOverviewOpacity1=0;
			bookOverviewAccess.style.display="none";
			
			bookTitleTop1-=0.5;
			
			siteHeaderOpacity1=0;
			siteHeaderAccess.style.display="none";
			
			
			if(bookTitleTop1<=-52)
			{
				bookChapter1BgOpacity1+=0.01;
				
				bookTitleTop1=-52;
				
				chapter1Opacity1+=0.01;
				
				if(bookChapter1BgOpacity1>=1)
				{
					bookChapter1BgOpacity1=1;
					
					chapter1Opacity1=1;
					
					isSiteAnimated1=true;
					
					if(isSiteAnimated1==true)
					{
						bookMenuOpacity1=1;
						bookOverviewOpacity1=1;
						
						bookTitleTop1=0;
						
						bookChapter1BgOpacity1=0;
						
						chapter1Opacity1=0;
						
						siteHeaderFontSize1=28;
						siteHeaderMargin1=155;
						siteHeaderOpacity1=1;
						siteHeaderPadding1=25;
						siteHeaderWidth1=430;
					}
					
					window.clearInterval(siteHeaderAnimate1);
				}
			}
		}
	}
	
	siteHeaderFontSize1-=0.07;
	siteHeaderMargin1+=0.56;
	siteHeaderPadding1-=0.06;
	siteHeaderWidth1--;
}

/*
-------------------------------------------------------------------
Hide Site Header Function:
This function will arrange the property values of the elements that
will be mentioned below in a manner that will hide the site header
element and its background.

1.	Site Header Element 
2.	Book Title Element
3.	Book Overview Element
4.	Book Menu Element
-------------------------------------------------------------------
*/
function showSiteHeader()
{
	bookChapter1BgAccess=document.getElementById("bookChapter1Bg");
	bookMenuAccess=document.getElementById("bookMenu");
	bookOverviewAccess=document.getElementById("bookOverview");
	bookTitleAccess=document.getElementById("bookTitle");
	
	chapter1Access=document.getElementById("chapter1");
	
	siteHeaderAccess=document.getElementById("siteHeader");
	
	bookChapter1BgAccess.style.opacity=bookChapter1BgOpacity2;
	
	bookMenuAccess.style.display="block";
	bookMenuAccess.style.margin="0px 155px";
	bookMenuAccess.style.opacity=bookMenuOpacity2;
	
	bookOverviewAccess.style.display="block";
	bookOverviewAccess.style.opacity=bookOverviewOpacity2;
	
	bookTitleAccess.style.top=bookTitleTop2+"px";
	
	chapter1Access.style.opacity=chapter1Opacity2;
	
	siteHeaderAccess.style.display="block";
	siteHeaderAccess.style.fontSize=siteHeaderFontSize2+"px";
	siteHeaderAccess.style.margin="0px "+siteHeaderMargin2+"px";
	siteHeaderAccess.style.opacity=siteHeaderOpacity2;
	siteHeaderAccess.style.padding="1px "+siteHeaderPadding2+"px";
	siteHeaderAccess.style.width=siteHeaderWidth2+"px";
	
	if(bookChapter1BgOpacity2<=0)
	{
		bookChapter1BgOpacity2=0;
		bookChapter1BgAccess.style.display="none";
		
		bookTitleTop2+=0.5;
		
		chapter1Opacity2=0;
		chapter1Access.style.display="none";
		
		if(bookTitleTop2>=0)
		{
			bookMenuOpacity2+=0.01;
			
			bookOverviewOpacity2+=0.01;
			
			bookTitleTop2=0;
			
			siteHeaderOpacity2+=0.01;
			
			if(siteHeaderOpacity2>=1)
			{
				bookMenuOpacity2=1;
				bookOverviewOpacity2=1;
				
				siteHeaderFontSize2+=0.07;
				siteHeaderMargin2-=0.56;
				siteHeaderOpacity2=1;
				siteHeaderPadding2+=0.06;
				siteHeaderWidth2++;
				
				if(siteHeaderWidth2>=430)
				{
					siteHeaderWidth2=430;
					
					isSiteAnimated2=true;
					
					if(isSiteAnimated2==true)
					{
						bookChapter1BgOpacity2=1;
						
						bookMenuOpacity2=0;
						
						bookOverviewOpacity2=0;
						
						bookTitleTop2=-52;
						
						chapter1Opacity2=1;
						
						siteHeaderFontSize2=4.34;
						siteHeaderMargin2=344.28;
						siteHeaderOpacity2=0;
						siteHeaderPadding2=4.72;
						siteHeaderWidth2=93;
					}
				
					window.clearInterval(animateSiteHeader2);
				}
			}
		}
	}
	
	bookChapter1BgOpacity2-=0.01;
	chapter1Opacity2-=0.01;
}

window.addEventListener("load",bookSetup1,false);