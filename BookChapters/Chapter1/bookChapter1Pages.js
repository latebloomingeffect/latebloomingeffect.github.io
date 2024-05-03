/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/
//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess;
var bookChapter1BgTop1=0;
var bookChapter1BgTop2=-52;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess;
var bookPage1BgAnimate;
var bookPage1BgOpacity1=0;
var bookPage1BgOpacity2=1;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess;
var bookPage2BgOpacity1=0;
var bookPage2BgOpacity2=1;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess;
var bookPage3BgOpacity1=0;
var bookPage3BgOpacity2=1;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess;
var bookPage4BgOpacity1=0;
var bookPage4BgOpacity2=1;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess;
var bookPage5BgOpacity1=0;
var bookPage5BgOpacity2=1;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess;
var bookPage6BgOpacity1=0;
var bookPage6BgOpacity2=1;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess;
var bookPage7BgOpacity1=0;
var bookPage7BgOpacity2=1;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess;
var bookPage8BgOpacity1=0;
var bookPage8BgOpacity2=1;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess;
var bookPage9BgOpacity1=0;
var bookPage9BgOpacity2=1;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess;
var bookPage10BgOpacity1=0;
var bookPage10BgOpacity2=1;

//Variables required to manipulate the Book Title element
var bookTitleAccess;
var bookTitleAnimate;
var bookTitleOpacity1=1;
var bookTitleOpacity2=0;

//Variables required to reset the property values of the elements
var isBookTitleAnimated1=false;
var isBookTitleAnimated2=false;

//Variables required to manipulate the Chapter 1 element
var chapter1Access;
var chapter1Animate;
var chapter1Top1=3;
var chapter1Top2=-49;

//Variables required to manipulate the Page 1 element
var page1Access;
var page1Opacity1=0;
var page1Opacity2=1;

//Variables required to manipulate the Page 2 element
var page2Access;
var page2Opacity1=0;
var page2Opacity2=1;

//Variables required to manipulate the Page 3 element
var page3Access;
var page3Opacity1=0;
var page3Opacity2=1;

//Variables required to manipulate the Page 4 element
var page4Access;
var page4Opacity1=0;
var page4Opacity2=1;

//Variables required to manipulate the Page 5 element
var page5Access;
var page5Opacity1=0;
var page5Opacity2=1;

//Variables required to manipulate the Page 6 element
var page6Access;
var page6Opacity1=0;
var page6Opacity2=1;

//Variables required to manipulate the Page 7 element
var page7Access;
var page7Opacity1=0;
var page7Opacity2=1;

//Variables required to manipulate the Page 8 element
var page8Access;
var page8Opacity1=0;
var page8Opacity2=1;

//Variables required to manipulate the Page 9 element
var page9Access;
var page9Opacity1=0;
var page9Opacity2=1;

//Variables required to manipulate the Page 10 element
var page10Access;
var page10Opacity1=0;
var page10Opacity2=1;

/*
-------------------------------------------------------------------
Book Setup Function:
This function will link the required variables created in the script
to the elements found in the drico mistic page 
-------------------------------------------------------------------
*/
function bookSetup2()
{
	chapter1Access=document.getElementById("chapter1");
	chapter1Access.addEventListener("click",animateChapter1Pages1,false);
	
	bookPage1BgAccess=document.getElementById("bookPage1Bg");
	bookPage1BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage2BgAccess=document.getElementById("bookPage2Bg");
	bookPage2BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage3BgAccess=document.getElementById("bookPage3Bg");
	bookPage3BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage4BgAccess=document.getElementById("bookPage4Bg");
	bookPage4BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage5BgAccess=document.getElementById("bookPage5Bg");
	bookPage5BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage6BgAccess=document.getElementById("bookPage6Bg");
	bookPage6BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage7BgAccess=document.getElementById("bookPage7Bg");
	bookPage7BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage8BgAccess=document.getElementById("bookPage8Bg");
	bookPage8BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage9BgAccess=document.getElementById("bookPage9Bg");
	bookPage9BgAccess.addEventListener("click",animateChapter1Pages2,false);
	
	bookPage10BgAccess=document.getElementById("bookPage10Bg");
	bookPage10BgAccess.addEventListener("click",animateChapter1Pages2,false);
}

/*
-------------------------------------------------------------------
Animate Chapter 1 Function:
This function will initiate the animation process for hiding the 
book title element
-------------------------------------------------------------------
*/
function animateChapter1Pages1()
{
	chapter1Animate=window.setInterval(showChapter1Pages,15);
}

function animateChapter1Pages2()
{
	bookPage1BgAnimate=window.setInterval(hideChapter1Pages,15);
}

function showChapter1Pages()
{
	bookChapter1BgAccess=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess=document.getElementById("bookPage1Bg");
	bookPage2BgAccess=document.getElementById("bookPage2Bg");
	bookPage3BgAccess=document.getElementById("bookPage3Bg");
	bookPage4BgAccess=document.getElementById("bookPage4Bg");
	bookPage5BgAccess=document.getElementById("bookPage5Bg");
	bookPage6BgAccess=document.getElementById("bookPage6Bg");
	bookPage7BgAccess=document.getElementById("bookPage7Bg");
	bookPage8BgAccess=document.getElementById("bookPage8Bg");
	bookPage9BgAccess=document.getElementById("bookPage9Bg");
	bookPage10BgAccess=document.getElementById("bookPage10Bg");
	
	bookTitleAccess=document.getElementById("bookTitle");
	
	chapter1Access=document.getElementById("chapter1");
	
	page1Access=document.getElementById("page1");
	page2Access=document.getElementById("page2");
	page3Access=document.getElementById("page3");
	page4Access=document.getElementById("page4");
	page5Access=document.getElementById("page5");
	page6Access=document.getElementById("page6");
	page7Access=document.getElementById("page7");
	page8Access=document.getElementById("page8");
	page9Access=document.getElementById("page9");
	page10Access=document.getElementById("page10");
	
	bookChapter1BgAccess.style.top=bookChapter1BgTop1+"px";
	
	bookPage1BgAccess.style.display="block";
	bookPage1BgAccess.style.opacity=bookPage1BgOpacity1;
	
	bookPage2BgAccess.style.display="block";
	bookPage2BgAccess.style.opacity=bookPage2BgOpacity1;
	
	bookPage3BgAccess.style.display="block";
	bookPage3BgAccess.style.opacity=bookPage3BgOpacity1;
	
	bookPage4BgAccess.style.display="block";
	bookPage4BgAccess.style.opacity=bookPage4BgOpacity1;
	
	bookPage5BgAccess.style.display="block";
	bookPage5BgAccess.style.opacity=bookPage5BgOpacity1;
	
	bookPage6BgAccess.style.display="block";
	bookPage6BgAccess.style.opacity=bookPage6BgOpacity1;
	
	bookPage7BgAccess.style.display="block";
	bookPage7BgAccess.style.opacity=bookPage7BgOpacity1;
	
	bookPage8BgAccess.style.display="block";
	bookPage8BgAccess.style.opacity=bookPage8BgOpacity1;
	
	bookPage9BgAccess.style.display="block";
	bookPage9BgAccess.style.opacity=bookPage9BgOpacity1;
	
	bookPage10BgAccess.style.display="block";
	bookPage10BgAccess.style.opacity=bookPage10BgOpacity1;
	
	bookTitleAccess.style.opacity=bookTitleOpacity1;
	
	chapter1Access.style.top=chapter1Top1+"px";
	
	page1Access.style.display="block";
	page1Access.style.opacity=page1Opacity1;
	
	page2Access.style.display="block";
	page2Access.style.opacity=page2Opacity1;
	
	page3Access.style.display="block";
	page3Access.style.opacity=page3Opacity1;
	
	page4Access.style.display="block";
	page4Access.style.opacity=page4Opacity1;
	
	page5Access.style.display="block";
	page5Access.style.opacity=page5Opacity1;
	
	page6Access.style.display="block";
	page6Access.style.opacity=page6Opacity1;
	
	page7Access.style.display="block";
	page7Access.style.opacity=page7Opacity1;
	
	page8Access.style.display="block";
	page8Access.style.opacity=page8Opacity1;
	
	page9Access.style.display="block";
	page9Access.style.opacity=page9Opacity1;
	
	page10Access.style.display="block";
	page10Access.style.opacity=page10Opacity1;
	
	if(bookTitleOpacity1<=0)
	{
		bookChapter1BgTop1-=0.5;
		
		bookTitleOpacity1=0;
		bookTitleAccess.style.display="none";
		
		chapter1Top1-=0.5;
		
		if(bookChapter1BgTop1<=-52)
		{
			bookChapter1BgTop1=-52;
			
			bookPage1BgOpacity1+=0.01;
			bookPage2BgOpacity1+=0.01;
			bookPage3BgOpacity1+=0.01;
			bookPage4BgOpacity1+=0.01;
			bookPage5BgOpacity1+=0.01;
			bookPage6BgOpacity1+=0.01;
			bookPage7BgOpacity1+=0.01;
			bookPage8BgOpacity1+=0.01;
			bookPage9BgOpacity1+=0.01;
			bookPage10BgOpacity1+=0.01;
			
			chapter1Top1=-49;
			
			page1Opacity1+=0.01;
			page2Opacity1+=0.01;
			page3Opacity1+=0.01;
			page4Opacity1+=0.01;
			page5Opacity1+=0.01;
			page6Opacity1+=0.01;
			page7Opacity1+=0.01;
			page8Opacity1+=0.01;
			page9Opacity1+=0.01;
			page10Opacity1+=0.01;
			
			if(bookPage1BgOpacity1>=1)
			{
				bookPage1BgOpacity1=1;
				bookPage2BgOpacity1=1;
				bookPage3BgOpacity1=1;
				bookPage4BgOpacity1=1;
				bookPage5BgOpacity1=1;
				bookPage6BgOpacity1=1;
				bookPage7BgOpacity1=1;
				bookPage8BgOpacity1=1;
				bookPage9BgOpacity1=1;
				bookPage10BgOpacity1=1;
				
				page1Opacity1=1;
				page2Opacity1=1;
				page3Opacity1=1;
				page4Opacity1=1;
				page5Opacity1=1;
				page6Opacity1=1;
				page7Opacity1=1;
				page8Opacity1=1;
				page9Opacity1=1;
				page10Opacity1=1;
				
				isBookTitleAnimated1=true;
				
				if(isBookTitleAnimated1==true)
				{
					bookChapter1BgTop1=0;
					
					bookPage1BgOpacity1=0;
					bookPage2BgOpacity1=0;
					bookPage3BgOpacity1=0;
					bookPage4BgOpacity1=0;
					bookPage5BgOpacity1=0;
					bookPage6BgOpacity1=0;
					bookPage7BgOpacity1=0;
					bookPage8BgOpacity1=0;
					bookPage9BgOpacity1=0;
					bookPage10BgOpacity1=0;
					
					bookTitleOpacity1=1;
					
					chapter1Top1=3;
					
					page1Opacity1=0;
					page2Opacity1=0;
					page3Opacity1=0;
					page4Opacity1=0;
					page5Opacity1=0;
					page6Opacity1=0;
					page7Opacity1=0;
					page8Opacity1=0;
					page9Opacity1=0;
					page10Opacity1=0;
				
					window.clearInterval(chapter1Animate);
				}
			}
		}
	}
	
	bookTitleOpacity1-=0.01;
}

function hideChapter1Pages()
{
	bookChapter1BgAccess=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess=document.getElementById("bookPage1Bg");
	bookPage2BgAccess=document.getElementById("bookPage2Bg");
	bookPage3BgAccess=document.getElementById("bookPage3Bg");
	bookPage4BgAccess=document.getElementById("bookPage4Bg");
	bookPage5BgAccess=document.getElementById("bookPage5Bg");
	bookPage6BgAccess=document.getElementById("bookPage6Bg");
	bookPage7BgAccess=document.getElementById("bookPage7Bg");
	bookPage8BgAccess=document.getElementById("bookPage8Bg");
	bookPage9BgAccess=document.getElementById("bookPage9Bg");
	bookPage10BgAccess=document.getElementById("bookPage10Bg");
	
	bookTitleAccess=document.getElementById("bookTitle");
	
	chapter1Access=document.getElementById("chapter1");
	
	page1Access=document.getElementById("page1");
	page2Access=document.getElementById("page2");
	page3Access=document.getElementById("page3");
	page4Access=document.getElementById("page4");
	page5Access=document.getElementById("page5");
	page6Access=document.getElementById("page6");
	page7Access=document.getElementById("page7");
	page8Access=document.getElementById("page8");
	page9Access=document.getElementById("page9");
	page10Access=document.getElementById("page10");
	
	bookChapter1BgAccess.style.top=bookChapter1BgTop2+"px";
	
	bookPage1BgAccess.style.opacity=bookPage1BgOpacity2;
	bookPage2BgAccess.style.opacity=bookPage2BgOpacity2;
	bookPage3BgAccess.style.opacity=bookPage3BgOpacity2;
	bookPage4BgAccess.style.opacity=bookPage4BgOpacity2;
	bookPage5BgAccess.style.opacity=bookPage5BgOpacity2;
	bookPage6BgAccess.style.opacity=bookPage6BgOpacity2;
	bookPage7BgAccess.style.opacity=bookPage7BgOpacity2;
	bookPage8BgAccess.style.opacity=bookPage8BgOpacity2;
	bookPage9BgAccess.style.opacity=bookPage9BgOpacity2;
	bookPage10BgAccess.style.opacity=bookPage10BgOpacity2;
	
	bookTitleAccess.style.display="block";
	bookTitleAccess.style.opacity=bookTitleOpacity2;
	
	chapter1Access.style.top=chapter1Top2+"px";
	
	page1Access.style.opacity=page1Opacity2;
	page2Access.style.opacity=page2Opacity2;
	page3Access.style.opacity=page3Opacity2;
	page4Access.style.opacity=page4Opacity2;
	page5Access.style.opacity=page5Opacity2;
	page6Access.style.opacity=page6Opacity2;
	page7Access.style.opacity=page7Opacity2;
	page8Access.style.opacity=page8Opacity2;
	page9Access.style.opacity=page9Opacity2;
	page10Access.style.opacity=page10Opacity2;
	
	if(bookPage1BgOpacity2<=0)
	{
		bookChapter1BgTop2+=0.5;
		
		bookPage1BgOpacity2=0;
		bookPage2BgOpacity2=0;
		bookPage3BgOpacity2=0;
		bookPage4BgOpacity2=0;
		bookPage5BgOpacity2=0;
		bookPage6BgOpacity2=0;
		bookPage7BgOpacity2=0;
		bookPage8BgOpacity2=0;
		bookPage9BgOpacity2=0;
		bookPage10BgOpacity2=0;
		
		bookPage1BgAccess.style.display="none";
		bookPage2BgAccess.style.display="none";
		bookPage3BgAccess.style.display="none";
		bookPage4BgAccess.style.display="none";
		bookPage5BgAccess.style.display="none";
		bookPage6BgAccess.style.display="none";
		bookPage7BgAccess.style.display="none";
		bookPage8BgAccess.style.display="none";
		bookPage9BgAccess.style.display="none";
		bookPage10BgAccess.style.display="none";
		
		chapter1Top2+=0.5;
		
		page1Opacity2=0;
		page2Opacity2=0;
		page3Opacity2=0;
		page4Opacity2=0;
		page5Opacity2=0;
		page6Opacity2=0;
		page7Opacity2=0;
		page8Opacity2=0;
		page9Opacity2=0;
		page10Opacity2=0;
		
		page1Access.style.display="none";
		page2Access.style.display="none";
		page3Access.style.display="none";
		page4Access.style.display="none";
		page5Access.style.display="none";
		page6Access.style.display="none";
		page7Access.style.display="none";
		page8Access.style.display="none";
		page9Access.style.display="none";
		page10Access.style.display="none";
		
		if(bookChapter1BgTop2>=0)
		{
			bookChapter1BgTop2=0;

			bookTitleOpacity2+=0.01;
			
			chapter1Top2=3;
			
			if(bookTitleOpacity2>=1)
			{
				bookTitleOpacity2=1;
				
				isBookTitleAnimated2=true;
				
				if(isBookTitleAnimated2==true)
				{
					bookChapter1BgTop2=-52;
					
					bookPage1BgOpacity2=1;
					bookPage2BgOpacity2=1;
					bookPage3BgOpacity2=1;
					bookPage4BgOpacity2=1;
					bookPage5BgOpacity2=1;
					bookPage6BgOpacity2=1;
					bookPage7BgOpacity2=1;
					bookPage8BgOpacity2=1;
					bookPage9BgOpacity2=1;
					bookPage10BgOpacity2=1;
		
					bookTitleOpacity2=0;
					
					chapter1Top2=-49;
					
					page1Opacity2=1;
					page2Opacity2=1;
					page3Opacity2=1;
					page4Opacity2=1;
					page5Opacity2=1;
					page6Opacity2=1;
					page7Opacity2=1;
					page8Opacity2=1;
					page9Opacity2=1;
					page10Opacity2=1;
		
				}
				
				window.clearInterval(bookPage1BgAnimate);
			}
		}
	}
	
	bookPage1BgOpacity2-=0.01;
	bookPage2BgOpacity2-=0.01;
	bookPage3BgOpacity2-=0.01;
	bookPage4BgOpacity2-=0.01;
	bookPage5BgOpacity2-=0.01;
	bookPage6BgOpacity2-=0.01;
	bookPage7BgOpacity2-=0.01;
	bookPage8BgOpacity2-=0.01;
	bookPage9BgOpacity2-=0.01;
	bookPage10BgOpacity2-=0.01;
	
	page1Opacity2-=0.01;
	page2Opacity2-=0.01;
	page3Opacity2-=0.01;
	page4Opacity2-=0.01;
	page5Opacity2-=0.01;
	page6Opacity2-=0.01;
	page7Opacity2-=0.01;
	page8Opacity2-=0.01;
	page9Opacity2-=0.01;
	page10Opacity2-=0.01;
}

window.addEventListener("load",bookSetup2,false);
