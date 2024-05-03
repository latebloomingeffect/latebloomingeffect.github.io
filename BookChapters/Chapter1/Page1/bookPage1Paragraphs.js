/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess1;
var bookChapter1BgOpacity1_1=1;
var bookChapter1BgOpacity2_1=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess1;
var bookPage1BgTop1_1=0;
var bookPage1BgTop2_1=-52;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess1;
var bookPage2BgOpacity1_1=1;
var bookPage2BgOpacity2_1=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess1;
var bookPage3BgOpacity1_1=1;
var bookPage3BgOpacity2_1=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess1;
var bookPage4BgOpacity1_1=1;
var bookPage4BgOpacity2_1=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess1;
var bookPage5BgOpacity1_1=1;
var bookPage5BgOpacity2_1=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess1;
var bookPage6BgOpacity1_1=1;
var bookPage6BgOpacity2_1=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess1;
var bookPage7BgOpacity1_1=1;
var bookPage7BgOpacity2_1=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess1;
var bookPage8BgOpacity1_1=1;
var bookPage8BgOpacity2_1=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess1;
var bookPage9BgOpacity1_1=1;
var bookPage9BgOpacity2_1=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess1;
var bookPage10BgOpacity1_1=1;
var bookPage10BgOpacity2_1=0;

//Variables required to manipulate the Book Paragraph Bg 1 
//element
var bookParagraphBg1Access1;
var bookParagraphBg1Opacity1_1=0;
var bookParagraphBg1Opacity2_1=1;

//Variables required to manipulate the Chapter 1 element
var chapter1Access1;
var chapter1Opacity1_1=1;
var chapter1Opacity2_1=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_1=false;
var isParagraphAnimated2_1=false;

//Variables required to manipulate the Page 1 element
var page1Access1;
var page1Top1_1=2;
var page1Top2_1=-50;

//Variables required to manipulate the Page 2 element
var page2Access1;
var page2Opacity1_1=1;
var page2Opacity2_1=0;

//Variables required to manipulate the Page 3 element
var page3Access;
var page3Opacity1_1=1;
var page3Opacity2_1=0;

//Variables required to manipulate the Page 4 element
var page4Access;
var page4Opacity1_1=1;
var page4Opacity2_1=0;

//Variables required to manipulate the Page 5 element
var page5Access;
var page5Opacity1_1=1;
var page5Opacity2_1=0;

//Variables required to manipulate the Page 6 element
var page6Access1;
var page6Opacity1_1=1;
var page6Opacity2_1=0;

//Variables required to manipulate the Page 7 element
var page7Access1;
var page7Opacity1_1=1;
var page7Opacity2_1=0;

//Variables required to manipulate the Page 8 element
var page8Access;
var page8Opacity1_1=1;
var page8Opacity2_1=0;

//Variables required to manipulate the Page 9 element
var page9Access;
var page9Opacity1_1=1;
var page9Opacity2_1=0;

//Variables required to manipulate the Page 10 element
var page10Access;
var page10Opacity1_1=1;
var page10Opacity2_1=0;

var paragraphAnimate1_1;
var paragraphAnimate2_1;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access1;
var paragraph1Opacity1_1=0;
var paragraph1Opacity2_1=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access1;
var paragraph2Opacity1_1=0;
var paragraph2Opacity2_1=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access1;
var paragraph3Opacity1_1=0;
var paragraph3Opacity2_1=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access1;
var paragraph4Opacity1_1=0;
var paragraph4Opacity2_1=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access1;
var paragraph5Opacity1_1=0;
var paragraph5Opacity2_1=1;

/*
-------------------------------------------------------------------
Book Setup Function:
This function will link the required variables created in the script
to the elements found in the drico mistic page 
-------------------------------------------------------------------
*/
function bookSetup3_1()
{
	bookParagraphBg1Access1=document.getElementById("bookParagraphBg1");
	bookParagraphBg1Access1.addEventListener("click",animateParagraphs2_1,false);
	
	page1Access1=document.getElementById("page1");
	page1Access1.addEventListener("click",animateParagraphs1_1,false);
}

function animateParagraphs1_1()
{
	paragraphAnimate1_1=window.setInterval(showPage1Paragraphs1,15);
}

function animateParagraphs2_1()
{
	paragraphAnimate2_1=window.setInterval(hidePage1Paragraphs1,15);
}

function showPage1Paragraphs1()
{
	bookChapter1BgAccess1=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess1=document.getElementById("bookPage1Bg");
	bookPage2BgAccess1=document.getElementById("bookPage2Bg");
	bookPage3BgAccess1=document.getElementById("bookPage3Bg");
	bookPage4BgAccess1=document.getElementById("bookPage4Bg");
	bookPage5BgAccess1=document.getElementById("bookPage5Bg");
	bookPage6BgAccess1=document.getElementById("bookPage6Bg");
	bookPage7BgAccess1=document.getElementById("bookPage7Bg");
	bookPage8BgAccess1=document.getElementById("bookPage8Bg");
	bookPage9BgAccess1=document.getElementById("bookPage9Bg");
	bookPage10BgAccess1=document.getElementById("bookPage10Bg");
	
	bookParagraphBg1Access1=document.getElementById("bookParagraphBg1");
	
	chapter1Access1=document.getElementById("chapter1");
	
	page1Access1=document.getElementById("page1");
	page2Access1=document.getElementById("page2");
	page3Access1=document.getElementById("page3");
	page4Access1=document.getElementById("page4");
	page5Access1=document.getElementById("page5");
	page6Access1=document.getElementById("page6");
	page7Access1=document.getElementById("page7");
	page8Access1=document.getElementById("page8");
	page9Access1=document.getElementById("page9");
	page10Access1=document.getElementById("page10");
	
	paragraph1Access1=document.getElementById("bookParagraph1-1");
	paragraph2Access1=document.getElementById("bookParagraph1-2");
	paragraph3Access1=document.getElementById("bookParagraph1-3");
	paragraph4Access1=document.getElementById("bookParagraph1-4");
	paragraph5Access1=document.getElementById("bookParagraph1-5");
	
	bookChapter1BgAccess1.style.opacity=bookChapter1BgOpacity1_1;
	
	bookPage1BgAccess1.style.top=bookPage1BgTop1_1+"px";
	
	bookPage2BgAccess1.style.opacity=bookPage2BgOpacity1_1;
	bookPage3BgAccess1.style.opacity=bookPage3BgOpacity1_1;
	bookPage4BgAccess1.style.opacity=bookPage4BgOpacity1_1;
	bookPage5BgAccess1.style.opacity=bookPage5BgOpacity1_1;
	bookPage6BgAccess1.style.opacity=bookPage6BgOpacity1_1;
	bookPage7BgAccess1.style.opacity=bookPage7BgOpacity1_1;
	bookPage8BgAccess1.style.opacity=bookPage8BgOpacity1_1;
	bookPage9BgAccess1.style.opacity=bookPage9BgOpacity1_1;
	bookPage10BgAccess1.style.opacity=bookPage10BgOpacity1_1;
	
	bookParagraphBg1Access1.style.display="block";
	bookParagraphBg1Access1.style.opacity=bookParagraphBg1Opacity1_1;
	
	chapter1Access1.style.opacity=chapter1Opacity1_1;
	
	page1Access1.style.top=page1Top1_1+"px";
	
	page2Access1.style.opacity=page2Opacity1_1;
	page3Access1.style.opacity=page3Opacity1_1;
	page4Access1.style.opacity=page4Opacity1_1;
	page5Access1.style.opacity=page5Opacity1_1;
	page6Access1.style.opacity=page6Opacity1_1;
	page7Access1.style.opacity=page7Opacity1_1;
	page8Access1.style.opacity=page8Opacity1_1;
	page9Access1.style.opacity=page9Opacity1_1;
	page10Access1.style.opacity=page10Opacity1_1;
	
	paragraph1Access1.style.display="block";
	paragraph1Access1.style.opacity=paragraph1Opacity1_1;
	
	paragraph2Access1.style.display="block";
	paragraph2Access1.style.opacity=paragraph2Opacity1_1;
	
	paragraph3Access1.style.display="block";
	paragraph3Access1.style.opacity=paragraph3Opacity1_1;
	
	paragraph4Access1.style.display="block";
	paragraph4Access1.style.opacity=paragraph4Opacity1_1;
	
	paragraph5Access1.style.display="block";
	paragraph5Access1.style.opacity=paragraph5Opacity1_1;
	
	if(page2Opacity1_1<=0)
	{
		bookChapter1BgOpacity1_1=0;
		
		bookPage1BgTop1_1-=0.5;
		
		bookPage2BgOpacity1_1=0;
		bookPage3BgOpacity1_1=0;
		bookPage4BgOpacity1_1=0;
		bookPage5BgOpacity1_1=0;
		bookPage6BgOpacity1_1=0;
		bookPage7BgOpacity1_1=0;
		bookPage8BgOpacity1_1=0;
		bookPage9BgOpacity1_1=0;
		bookPage10BgOpacity1_1=0;
		
		bookPage2BgAccess1.style.display="none";
		bookPage3BgAccess1.style.display="none";
		bookPage4BgAccess1.style.display="none";
		bookPage5BgAccess1.style.display="none";
		bookPage6BgAccess1.style.display="none";
		bookPage7BgAccess1.style.display="none";
		bookPage8BgAccess1.style.display="none";
		bookPage9BgAccess1.style.display="none";
		bookPage10BgAccess1.style.display="none";
		
		chapter1Opacity1_1=0;
		
		page1Top1_1-=0.5;
		
		page2Opacity1_1=0;
		page3Opacity1_1=0;
		page4Opacity1_1=0;
		page5Opacity1_1=0;
		page6Opacity1_1=0;
		page7Opacity1_1=0;
		page8Opacity1_1=0;
		page9Opacity1_1=0;
		page10Opacity1_1=0;
		
		page2Access1.style.display="none";
		page3Access1.style.display="none";
		page4Access1.style.display="none";
		page5Access1.style.display="none";
		page6Access1.style.display="none";
		page7Access1.style.display="none";
		page8Access1.style.display="none";
		page9Access1.style.display="none";
		page10Access1.style.display="none";
		
		if(bookPage1BgTop1_1<=-52)
		{
			bookPage1BgTop1_1=-52;
			
			bookParagraphBg1Opacity1_1+=0.01;
			
			page1Top1_1=-50;
			
			paragraph1Opacity1_1+=0.01;
			paragraph2Opacity1_1+=0.01;
			paragraph3Opacity1_1+=0.01;
			paragraph4Opacity1_1+=0.01;
			paragraph5Opacity1_1+=0.01;
			
			if(bookParagraphBg1Opacity1_1>=1)
			{
				bookParagraphBg1Opacity1_1=1;
				
				paragraph1Opacity1_1=1;
				paragraph2Opacity1_1=1;
				paragraph3Opacity1_1=1;
				paragraph4Opacity1_1=1;
				paragraph5Opacity1_1=1;
				
				isParagraphAnimated1_1=true;
				
				if(isParagraphAnimated1_1==true)
				{
					bookChapter1BgOpacity1_1=1;
					
					bookPage1BgTop1_1=0;
					
					bookPage2BgOpacity1_1=1;
					bookPage3BgOpacity1_1=1;
					bookPage4BgOpacity1_1=1;
					bookPage5BgOpacity1_1=1;
					bookPage6BgOpacity1_1=1;
					bookPage7BgOpacity1_1=1;
					bookPage8BgOpacity1_1=1;
					bookPage9BgOpacity1_1=1;
					bookPage10BgOpacity1_1=1;
		
					bookParagraphBg1Opacity1_1=0;
					
					chapter1Opacity1_1=1;
					
					page1Top1_1=2;
					
					page2Opacity1_1=1;
					page3Opacity1_1=1;
					page4Opacity1_1=1;
					page5Opacity1_1=1;
					page6Opacity1_1=1;
					page7Opacity1_1=1;
					page8Opacity1_1=1;
					page9Opacity1_1=1;
					page10Opacity1_1=1;
		
					paragraph1Opacity1_1=0;
					paragraph2Opacity1_1=0;
					paragraph3Opacity1_1=0;
					paragraph4Opacity1_1=0;
					paragraph5Opacity1_1=0;
				}
				
				window.clearInterval(paragraphAnimate1_1);
			}
		}
	}
	
	bookChapter1BgOpacity1_1-=0.01;
	
	bookPage2BgOpacity1_1-=0.01;
	bookPage3BgOpacity1_1-=0.01;
	bookPage4BgOpacity1_1-=0.01;
	bookPage5BgOpacity1_1-=0.01;
	bookPage6BgOpacity1_1-=0.01;
	bookPage7BgOpacity1_1-=0.01;
	bookPage8BgOpacity1_1-=0.01;
	bookPage9BgOpacity1_1-=0.01;
	bookPage10BgOpacity1_1-=0.01;
	
	chapter1Opacity1_1-=0.01;
	
	page2Opacity1_1-=0.01;
	page3Opacity1_1-=0.01;
	page4Opacity1_1-=0.01;
	page5Opacity1_1-=0.01;
	page6Opacity1_1-=0.01;
	page7Opacity1_1-=0.01;
	page8Opacity1_1-=0.01;
	page9Opacity1_1-=0.01;
	page10Opacity1_1-=0.01;
}

function hidePage1Paragraphs1()
{
	bookChapter1BgAccess1=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg1Access1=document.getElementById("bookParagraphBg1");
	
	bookPage1BgAccess1=document.getElementById("bookPage1Bg");
	bookPage2BgAccess1=document.getElementById("bookPage2Bg");
	bookPage3BgAccess1=document.getElementById("bookPage3Bg");
	bookPage4BgAccess1=document.getElementById("bookPage4Bg");
	bookPage5BgAccess1=document.getElementById("bookPage5Bg");
	bookPage6BgAccess1=document.getElementById("bookPage6Bg");
	bookPage7BgAccess1=document.getElementById("bookPage7Bg");
	bookPage8BgAccess1=document.getElementById("bookPage8Bg");
	bookPage9BgAccess1=document.getElementById("bookPage9Bg");
	bookPage10BgAccess1=document.getElementById("bookPage10Bg");
	
	chapter1Access1=document.getElementById("chapter1");
	
	page1Access1=document.getElementById("page1");
	page2Access1=document.getElementById("page2");
	page3Access1=document.getElementById("page3");
	page4Access1=document.getElementById("page4");
	page5Access1=document.getElementById("page5");
	page6Access1=document.getElementById("page6");
	page7Access1=document.getElementById("page7");
	page8Access1=document.getElementById("page8");
	page9Access1=document.getElementById("page9");
	page10Access1=document.getElementById("page10");
	
	paragraph1Access1=document.getElementById("bookParagraph1-1");
	paragraph2Access1=document.getElementById("bookParagraph1-2");
	paragraph3Access1=document.getElementById("bookParagraph1-3");
	paragraph4Access1=document.getElementById("bookParagraph1-4");
	paragraph5Access1=document.getElementById("bookParagraph1-5");
	
	bookChapter1BgAccess1.style.display="block";
	bookChapter1BgAccess1.style.opacity=bookChapter1BgOpacity2_1;
	
	bookPage1BgAccess1.style.top=bookPage1BgTop2_1+"px";
	
	bookPage2BgAccess1.style.display="block";
	bookPage2BgAccess1.style.opacity=bookPage2BgOpacity2_1;
	
	bookPage3BgAccess1.style.display="block";
	bookPage3BgAccess1.style.opacity=bookPage3BgOpacity2_1;
	
	bookPage4BgAccess1.style.display="block";
	bookPage4BgAccess1.style.opacity=bookPage4BgOpacity2_1;
	
	bookPage5BgAccess1.style.display="block";
	bookPage5BgAccess1.style.opacity=bookPage5BgOpacity2_1;
	
	bookPage6BgAccess1.style.display="block";
	bookPage6BgAccess1.style.opacity=bookPage6BgOpacity2_1;
	
	bookPage7BgAccess1.style.display="block";
	bookPage7BgAccess1.style.opacity=bookPage7BgOpacity2_1;
	
	bookPage8BgAccess1.style.display="block";
	bookPage8BgAccess1.style.opacity=bookPage8BgOpacity2_1;
	
	bookPage9BgAccess1.style.display="block";
	bookPage9BgAccess1.style.opacity=bookPage9BgOpacity2_1;
	
	bookPage10BgAccess1.style.display="block";
	bookPage10BgAccess1.style.opacity=bookPage10BgOpacity2_1;
	
	bookParagraphBg1Access1.style.opacity=bookParagraphBg1Opacity2_1;
	
	chapter1Access1.style.display="block";
	chapter1Access1.style.opacity=chapter1Opacity2_1;
	
	page1Access1.style.top=page1Top2_1+"px";
	
	page2Access1.style.display="block";
	page2Access1.style.opacity=page2Opacity2_1;
	
	page3Access1.style.display="block";
	page3Access1.style.opacity=page3Opacity2_1;
	
	page4Access1.style.display="block";
	page4Access1.style.opacity=page4Opacity2_1;
	
	page5Access1.style.display="block";
	page5Access1.style.opacity=page5Opacity2_1;
	
	page6Access1.style.display="block";
	page6Access1.style.opacity=page6Opacity2_1;
	
	page7Access1.style.display="block";
	page7Access1.style.opacity=page7Opacity2_1;
	
	page8Access1.style.display="block";
	page8Access1.style.opacity=page8Opacity2_1;
	
	page9Access1.style.display="block";
	page9Access1.style.opacity=page9Opacity2_1;
	
	page10Access1.style.display="block";
	page10Access1.style.opacity=page10Opacity2_1;
	
	paragraph1Access1.style.opacity=paragraph1Opacity2_1;
	paragraph2Access1.style.opacity=paragraph2Opacity2_1;
	paragraph3Access1.style.opacity=paragraph3Opacity2_1;
	paragraph4Access1.style.opacity=paragraph4Opacity2_1;
	paragraph5Access1.style.opacity=paragraph5Opacity2_1;
	
	if(bookParagraphBg1Opacity2_1<=0)
	{
		bookPage1BgTop2_1+=0.5;
		
		bookParagraphBg1Opacity2_1=0;
		bookParagraphBg1Access1.style.display="none";
		
		page1Top2_1+=0.5;
		
		paragraph1Opacity2_1=0;
		paragraph2Opacity2_1=0;
		paragraph3Opacity2_1=0;
		paragraph4Opacity2_1=0;
		paragraph5Opacity2_1=0;		
		
		paragraph1Access1.style.display="none";
		paragraph2Access1.style.display="none";
		paragraph3Access1.style.display="none";
		paragraph4Access1.style.display="none";
		paragraph5Access1.style.display="none";
		
		if(bookPage1BgTop2_1>=0)
		{
			bookChapter1BgOpacity2_1+=0.01;
			
			bookPage1BgTop2_1=0;
			
			bookPage2BgOpacity2_1+=0.01;
			bookPage3BgOpacity2_1+=0.01;
			bookPage4BgOpacity2_1+=0.01;
			bookPage5BgOpacity2_1+=0.01;
			bookPage6BgOpacity2_1+=0.01;
			bookPage7BgOpacity2_1+=0.01;
			bookPage8BgOpacity2_1+=0.01;
			bookPage9BgOpacity2_1+=0.01;
			bookPage10BgOpacity2_1+=0.01;
			
			chapter1Opacity2_1+=0.01;
			
			page1Top2_1=2;
			
			page2Opacity2_1+=0.01;
			page3Opacity2_1+=0.01;
			page4Opacity2_1+=0.01;
			page5Opacity2_1+=0.01;
			page6Opacity2_1+=0.01;
			page7Opacity2_1+=0.01;
			page8Opacity2_1+=0.01;
			page9Opacity2_1+=0.01;
			page10Opacity2_1+=0.01;
			
			if(bookPage2BgOpacity2_1>=1)
			{
				bookChapter1BgOpacity2_1=1;
				
				bookPage2BgOpacity2_1=1;
				bookPage3BgOpacity2_1=1;
				bookPage4BgOpacity2_1=1;
				bookPage5BgOpacity2_1=1;
				bookPage6BgOpacity2_1=1;
				bookPage7BgOpacity2_1=1;
				bookPage8BgOpacity2_1=1;
				bookPage9BgOpacity2_1=1;
				bookPage10BgOpacity2_1=1;
				
				chapter1Opacity2_1=1;
				
				page2Opacity2_1=1;
				page3Opacity2_1=1;
				page4Opacity2_1=1;
				page5Opacity2_1=1;
				page6Opacity2_1=1;
				page7Opacity2_1=1;
				page8Opacity2_1=1;
				page9Opacity2_1=1;
				page10Opacity2_1=1;
				
				isParagraphAnimated2_1=true;
				
				if(isParagraphAnimated2_1==true)
				{
					bookChapter1BgOpacity2_1=0;
				
					bookParagraphBg1Opacity2_1=1;
					
					bookPage1BgTop2_1=-52;
					
					bookPage2BgOpacity2_1=0;
					bookPage3BgOpacity2_1=0;
					bookPage4BgOpacity2_1=0;
					bookPage5BgOpacity2_1=0;
					bookPage6BgOpacity2_1=0;
					bookPage7BgOpacity2_1=0;
					bookPage8BgOpacity2_1=0;
					bookPage9BgOpacity2_1=0;
					bookPage10BgOpacity2_1=0;
				
					chapter1Opacity2_1=0;
					
					page1Top2_1=-50;
					
					page2Opacity2_1=0;
					page3Opacity2_1=0;
					page4Opacity2_1=0;
					page5Opacity2_1=0;
					page6Opacity2_1=0;
					page7Opacity2_1=0;
					page8Opacity2_1=0;
					page9Opacity2_1=0;
					page10Opacity2_1=0;
					
					paragraph1Opacity2_1=1;
					paragraph2Opacity2_1=1;
					paragraph3Opacity2_1=1;
					paragraph4Opacity2_1=1;
					paragraph5Opacity2_1=1;
				}
				window.clearInterval(paragraphAnimate2_1);
			}
		}
	}
	
	bookParagraphBg1Opacity2_1-=0.01;
	
	paragraph1Opacity2_1-=0.01;
	paragraph2Opacity2_1-=0.01;
	paragraph3Opacity2_1-=0.01;
	paragraph4Opacity2_1-=0.01;
	paragraph5Opacity2_1-=0.01;
}

window.addEventListener("load",bookSetup3_1,false);