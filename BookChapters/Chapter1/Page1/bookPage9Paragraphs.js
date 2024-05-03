/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess9;
var bookChapter1BgOpacity1_9=1;
var bookChapter1BgOpacity2_9=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess9;
var bookPage1BgOpacity1_9=1;
var bookPage1BgOpacity2_9=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess9;
var bookPage2BgOpacity1_9=1;
var bookPage2BgOpacity2_9=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess9;
var bookPage3BgOpacity1_9=1;
var bookPage3BgOpacity2_9=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess9;
var bookPage4BgOpacity1_9=1;
var bookPage4BgOpacity2_9=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess9;
var bookPage5BgOpacity1_9=1;
var bookPage5BgOpacity2_9=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess9;
var bookPage6BgOpacity1_9=1;
var bookPage6BgOpacity2_9=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess9;
var bookPage7BgOpacity1_9=1;
var bookPage7BgOpacity2_9=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess9;
var bookPage8BgOpacity1_9=1;
var bookPage8BgOpacity2_9=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess9;
var bookPage9BgTop1_9=256;
var bookPage9BgTop2_9=-52;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess9;
var bookPage10BgOpacity1_9=1;
var bookPage10BgOpacity2_9=0;

//Variables required to manipulate the Book Paragraph Bg 5 element
var bookParagraphBg9Access9;
var bookParagraphBg9Opacity1_9=0;
var bookParagraphBg9Opacity2_9=1;

//Variables required to manipulate the chapter 1 element
var chapter1Access9;
var chapter1Opacity1_9=1;
var chapter1Opacity2_9=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_9=false;
var isParagraphAnimated2_9=false;

//Variables required to manipulate the Page 1 element
var page1Access9;
var page1Opacity1_9=1;
var page1Opacity2_9=0;

//Variables required to manipulate the Page 2 element
var page2Access9;
var page2Opacity1_9=1;
var page2Opacity2_9=0;

//Variables required to manipulate the Page 3 element
var page3Access9;
var page3Opacity1_9=1;
var page3Opacity2_9=0;

//Variables required to manipulate the Page 4 element
var page4Access9;
var page4Opacity1_9=1;
var page4Opacity2_9=0;

//Variables required to manipulate the Page 5 element
var page5Access9;
var page5Opacity1_9=1;
var page5Opacity2_9=0;

//Variables required to manipulate the Page 6 element
var page6Access9;
var page6Opacity1_9=1;
var page6Opacity2_9=0;

//Variables required to manipulate the Page 7 element
var page7Access9;
var page7Opacity1_9=1;
var page7Opacity2_9=0;

//Variables required to manipulate the Page 8 element
var page8Access9;
var page8Opacity1_9=1;
var page8Opacity2_9=0;

//Variables required to manipulate the Page 9 element
var page9Access9;
var page9Top1_9=258;
var page9Top2_9=-50;

//Variables required to manipulate the Page 10 element
var page10Access9;
var page10Opacity1_9=1;
var page10Opacity2_9=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access9;
var paragraph1Opacity1_9=0;
var paragraph1Opacity2_9=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access9;
var paragraph2Opacity1_9=0;
var paragraph2Opacity2_9=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access9;
var paragraph3Opacity1_9=0;
var paragraph3Opacity2_9=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access9;
var paragraph4Opacity1_9=0;
var paragraph4Opacity2_9=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access9;
var paragraph5Opacity1_9=0;
var paragraph5Opacity2_9=1;

var paragraphAnimate1_9;
var paragraphAnimate2_9;

function bookSetup3_9()
{
	bookParagraphBg9Access9=document.getElementById("bookParagraphBg9");
	bookParagraphBg9Access9.addEventListener("click",animateParagraphs2_9,false);
	
	page9Access9=document.getElementById("page9");
	page9Access9.addEventListener("click",animateParagraphs1_9,false);
}

function animateParagraphs1_9()
{
	paragraphAnimate1_9=window.setInterval(showPage9Paragraphs9,15);
}

function animateParagraphs2_9()
{
	paragraphAnimate2_9=window.setInterval(hidePage9Paragraphs9,15);
}

function showPage9Paragraphs9()
{
	bookChapter1BgAccess9=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess9=document.getElementById("bookPage1Bg");
	bookPage2BgAccess9=document.getElementById("bookPage2Bg");
	bookPage3BgAccess9=document.getElementById("bookPage3Bg");
	bookPage4BgAccess9=document.getElementById("bookPage4Bg");
	bookPage5BgAccess9=document.getElementById("bookPage5Bg");
	bookPage6BgAccess9=document.getElementById("bookPage6Bg");
	bookPage7BgAccess9=document.getElementById("bookPage7Bg");
	bookPage8BgAccess9=document.getElementById("bookPage8Bg");
	bookPage9BgAccess9=document.getElementById("bookPage9Bg");
	bookPage10BgAccess9=document.getElementById("bookPage10Bg");
	
	bookParagraphBg9Access9=document.getElementById("bookParagraphBg9");
	
	chapter1Access9=document.getElementById("chapter1");
	
	page1Access9=document.getElementById("page1");
	page2Access9=document.getElementById("page2");
	page3Access9=document.getElementById("page3");
	page4Access9=document.getElementById("page4");
	page5Access9=document.getElementById("page5");
	page6Access9=document.getElementById("page6");
	page7Access9=document.getElementById("page7");
	page8Access9=document.getElementById("page8");
	page9Access9=document.getElementById("page9");
	page10Access9=document.getElementById("page10");
	
	paragraph1Access9=document.getElementById("bookParagraph9-1");
	paragraph2Access9=document.getElementById("bookParagraph9-2");
	paragraph3Access9=document.getElementById("bookParagraph9-3");
	paragraph4Access9=document.getElementById("bookParagraph9-4");
	paragraph5Access9=document.getElementById("bookParagraph9-5");
	
	bookChapter1BgAccess9.style.opacity=bookChapter1BgOpacity1_9;
	
	bookPage1BgAccess9.style.opacity=bookPage1BgOpacity1_9;
	bookPage2BgAccess9.style.opacity=bookPage2BgOpacity1_9;
	bookPage3BgAccess9.style.opacity=bookPage3BgOpacity1_9;
	bookPage4BgAccess9.style.opacity=bookPage4BgOpacity1_9;
	bookPage5BgAccess9.style.opacity=bookPage5BgOpacity1_9;
	bookPage6BgAccess9.style.opacity=bookPage6BgOpacity1_9;
	bookPage7BgAccess9.style.opacity=bookPage7BgOpacity1_9;
	bookPage8BgAccess9.style.opacity=bookPage8BgOpacity1_9;
	
	bookPage9BgAccess9.style.top=bookPage9BgTop1_9+"px";
	
	bookPage10BgAccess9.style.opacity=bookPage10BgOpacity1_9;
	
	bookParagraphBg9Access9.style.display="block";
	bookParagraphBg9Access9.style.opacity=bookParagraphBg9Opacity1_9;
	
	chapter1Access9.style.opacity=chapter1Opacity1_9;
	
	page1Access9.style.opacity=page1Opacity1_9;
	page2Access9.style.opacity=page2Opacity1_9;
	page3Access9.style.opacity=page3Opacity1_9;
	page4Access9.style.opacity=page4Opacity1_9;
	page5Access9.style.opacity=page5Opacity1_9;
	page6Access9.style.opacity=page6Opacity1_9;
	page7Access9.style.opacity=page7Opacity1_9;
	page8Access9.style.opacity=page8Opacity1_9;
	
	page9Access9.style.top=page9Top1_9+"px";
	
	page10Access9.style.opacity=page10Opacity1_9;
	
	paragraph1Access9.style.display="block";
	paragraph1Access9.style.opacity=paragraph1Opacity1_9;
	
	paragraph2Access9.style.display="block";
	paragraph2Access9.style.opacity=paragraph2Opacity1_9;
	
	paragraph3Access9.style.display="block";
	paragraph3Access9.style.opacity=paragraph3Opacity1_9;
	
	paragraph4Access9.style.display="block";
	paragraph4Access9.style.opacity=paragraph4Opacity1_9;
	
	paragraph5Access9.style.display="block";
	paragraph5Access9.style.opacity=paragraph5Opacity1_9;
	
	if(bookChapter1BgOpacity1_9<=0)
	{
		bookChapter1BgOpacity1_9=0;
		bookChapter1BgAccess9.style.display="none";
		
		bookPage1BgOpacity1_9=0;
		bookPage2BgOpacity1_9=0;
		bookPage3BgOpacity1_9=0;
		bookPage4BgOpacity1_9=0;
		bookPage5BgOpacity1_9=0;
		bookPage6BgOpacity1_9=0;
		bookPage7BgOpacity1_9=0;
		bookPage8BgOpacity1_9=0;
		
		bookPage10BgOpacity1_9=0;
		
		bookPage1BgAccess9.style.display="none";
		bookPage2BgAccess9.style.display="none";
		bookPage3BgAccess9.style.display="none";
		bookPage4BgAccess9.style.display="none";
		bookPage5BgAccess9.style.display="none";
		bookPage6BgAccess9.style.display="none";
		bookPage7BgAccess9.style.display="none";
		bookPage8BgAccess9.style.display="none";
		
		bookPage10BgAccess9.style.display="none";
		
		bookPage9BgTop1_9-=0.5;
		
		chapter1Opacity1_9=0;
		chapter1Access9.style.display="none";
		
		page1Opacity1_9=0;
		page2Opacity1_9=0;
		page3Opacity1_9=0;
		page4Opacity1_9=0;
		page5Opacity1_9=0;
		page6Opacity1_9=0;
		page7Opacity1_9=0;
		page8Opacity1_9=0;
		
		page10Opacity1_9=0;
		
		page1Access9.style.display="none";
		page2Access9.style.display="none";
		page3Access9.style.display="none";
		page4Access9.style.display="none";
		page5Access9.style.display="none";
		page6Access9.style.display="none";
		page7Access9.style.display="none";
		page8Access9.style.display="none";
		
		page10Access9.style.display="none";
		
		page9Top1_9-=0.5;
		
		if(bookPage9BgTop1_9<=-52)
		{
			bookPage9BgTop1_9=-52;
			
			bookParagraphBg9Opacity1_9+=0.01;
			
			page9Top1_9=-50;
			
			paragraph1Opacity1_9+=0.01;
			paragraph2Opacity1_9+=0.01;
			paragraph3Opacity1_9+=0.01;
			paragraph4Opacity1_9+=0.01;
			paragraph5Opacity1_9+=0.01;
			
			if(bookParagraphBg9Opacity1_9>=1)
			{
				bookParagraphBg9Opacity1_9=1;
				
				paragraph1Opacity1_9=1;
				paragraph2Opacity1_9=1;
				paragraph3Opacity1_9=1;
				paragraph4Opacity1_9=1;
				paragraph5Opacity1_9=1;
				
				isParagraphAnimated1_9=true;
				
				if(isParagraphAnimated1_9==true)
				{
					bookChapter1BgOpacity1_9=1;
		
					bookPage1BgOpacity1_9=1;
					bookPage2BgOpacity1_9=1;
					bookPage3BgOpacity1_9=1;
					bookPage4BgOpacity1_9=1;
					bookPage5BgOpacity1_9=1;
					bookPage6BgOpacity1_9=1;
					bookPage7BgOpacity1_9=1;
					bookPage8BgOpacity1_9=1;
					
					bookPage9BgTop1_9=256;
					
					bookPage10BgOpacity1_9=1;
					
					bookParagraphBg9Opacity1_9=0;
					
					chapter1Opacity1_9=1;
		
					page1Opacity1_9=1;
					page2Opacity1_9=1;
					page3Opacity1_9=1;
					page4Opacity1_9=1;
					page5Opacity1_9=1;
					page6Opacity1_9=1;
					page7Opacity1_9=1;
					page8Opacity1_9=1;
					
					page9Top1_9=258;
					
					page10Opacity1_9=1;
					
					paragraph1Opacity1_9=0;
					paragraph2Opacity1_9=0;
					paragraph3Opacity1_9=0;
					paragraph4Opacity1_9=0;
					paragraph5Opacity1_9=0;
				}
				window.clearInterval(paragraphAnimate1_9);
			}
		}
	}
	
	bookChapter1BgOpacity1_9-=0.01;
	
	bookPage1BgOpacity1_9-=0.01;
	bookPage2BgOpacity1_9-=0.01;
	bookPage3BgOpacity1_9-=0.01;
	bookPage4BgOpacity1_9-=0.01;
	bookPage5BgOpacity1_9-=0.01;
	bookPage6BgOpacity1_9-=0.01;
	bookPage7BgOpacity1_9-=0.01;
	bookPage8BgOpacity1_9-=0.01;
	
	bookPage10BgOpacity1_9-=0.01;
	
	chapter1Opacity1_9-=0.01;
	
	page1Opacity1_9-=0.01;
	page2Opacity1_9-=0.01;
	page3Opacity1_9-=0.01;
	page4Opacity1_9-=0.01;
	page5Opacity1_9-=0.01;
	page6Opacity1_9-=0.01;
	page7Opacity1_9-=0.01;
	page8Opacity1_9-=0.01;
	
	page10Opacity1_9-=0.01;
}

function hidePage9Paragraphs9()
{
	bookChapter1BgAccess9=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg9Access9=document.getElementById("bookParagraphBg9");
	
	bookPage1BgAccess9=document.getElementById("bookPage1Bg");
	bookPage2BgAccess9=document.getElementById("bookPage2Bg");
	bookPage3BgAccess9=document.getElementById("bookPage3Bg");
	bookPage4BgAccess9=document.getElementById("bookPage4Bg");
	bookPage5BgAccess9=document.getElementById("bookPage5Bg");
	bookPage6BgAccess9=document.getElementById("bookPage6Bg");
	bookPage7BgAccess9=document.getElementById("bookPage7Bg");
	bookPage8BgAccess9=document.getElementById("bookPage8Bg");
	bookPage9BgAccess9=document.getElementById("bookPage9Bg");
	bookPage10BgAccess9=document.getElementById("bookPage10Bg");
	
	chapter1Access9=document.getElementById("chapter1");
	
	page1Access9=document.getElementById("page1");
	page2Access9=document.getElementById("page2");
	page3Access9=document.getElementById("page3");
	page4Access9=document.getElementById("page4");
	page5Access9=document.getElementById("page5");
	page6Access9=document.getElementById("page6");
	page7Access9=document.getElementById("page7");
	page8Access9=document.getElementById("page8");
	page9Access9=document.getElementById("page9");
	page10Access9=document.getElementById("page10");
	
	paragraph1Access9=document.getElementById("bookParagraph9-1");
	paragraph2Access9=document.getElementById("bookParagraph9-2");
	paragraph3Access9=document.getElementById("bookParagraph9-3");
	paragraph4Access9=document.getElementById("bookParagraph9-4");
	paragraph5Access9=document.getElementById("bookParagraph9-5");
	
	bookChapter1BgAccess9.style.display="block";
	bookChapter1BgAccess9.style.opacity=bookChapter1BgOpacity2_9;
	
	bookPage1BgAccess9.style.display="block";
	bookPage1BgAccess9.style.opacity=bookPage1BgOpacity2_9;
	
	bookPage2BgAccess9.style.display="block";
	bookPage2BgAccess9.style.opacity=bookPage2BgOpacity2_9;
	
	bookPage3BgAccess9.style.display="block";
	bookPage3BgAccess9.style.opacity=bookPage3BgOpacity2_9;
	
	bookPage4BgAccess9.style.display="block";
	bookPage4BgAccess9.style.opacity=bookPage4BgOpacity2_9;
	
	bookPage5BgAccess9.style.display="block";
	bookPage5BgAccess9.style.opacity=bookPage5BgOpacity2_9;
	
	bookPage6BgAccess9.style.display="block";
	bookPage6BgAccess9.style.opacity=bookPage6BgOpacity2_9;
	
	bookPage7BgAccess9.style.display="block";
	bookPage7BgAccess9.style.opacity=bookPage7BgOpacity2_9;
	
	bookPage8BgAccess9.style.display="block";
	bookPage8BgAccess9.style.opacity=bookPage8BgOpacity2_9;
	
	bookPage9BgAccess9.style.top=bookPage9BgTop2_9+"px";
	
	bookPage10BgAccess9.style.display="block";
	bookPage10BgAccess9.style.opacity=bookPage10BgOpacity2_9;
	
	bookParagraphBg9Access9.style.opacity=bookParagraphBg9Opacity2_9;
	
	chapter1Access9.style.display="block";
	chapter1Access9.style.opacity=chapter1Opacity2_9;
	
	page1Access9.style.display="block";
	page1Access9.style.opacity=page1Opacity2_9;
	
	page2Access9.style.display="block";
	page2Access9.style.opacity=page2Opacity2_9;
	
	page3Access9.style.display="block";
	page3Access9.style.opacity=page3Opacity2_9;
	
	page4Access9.style.display="block";
	page4Access9.style.opacity=page4Opacity2_9;
	
	page5Access9.style.display="block";
	page5Access9.style.opacity=page5Opacity2_9;
	
	page6Access9.style.display="block";
	page6Access9.style.opacity=page6Opacity2_9;
	
	page7Access9.style.display="block";
	page7Access9.style.opacity=page7Opacity2_9;
	
	page8Access9.style.display="block";
	page8Access9.style.opacity=page8Opacity2_9;
	
	page9Access9.style.top=page9Top2_9+"px";
	
	page10Access9.style.display="block";
	page10Access9.style.opacity=page10Opacity2_9;
	
	paragraph1Access9.style.opacity=paragraph1Opacity2_9;
	paragraph2Access9.style.opacity=paragraph2Opacity2_9;
	paragraph3Access9.style.opacity=paragraph3Opacity2_9;
	paragraph4Access9.style.opacity=paragraph4Opacity2_9;
	paragraph5Access9.style.opacity=paragraph5Opacity2_9;
	
	if(bookParagraphBg9Opacity2_9<=0)
	{
		bookPage9BgTop2_9+=0.5;
		
		bookParagraphBg9Opacity2_9=0;
		bookParagraphBg9Access9.style.display="none";
		
		page9Top2_9+=0.5;
		
		paragraph1Opacity2_9=0;
		paragraph2Opacity2_9=0;
		paragraph3Opacity2_9=0;
		paragraph4Opacity2_9=0;
		paragraph5Opacity2_9=0;
		
		paragraph1Access9.style.display="none";
		paragraph2Access9.style.display="none";
		paragraph3Access9.style.display="none";
		paragraph4Access9.style.display="none";
		paragraph5Access9.style.display="none";
		
		if(bookPage9BgTop2_9>=256)
		{
			bookChapter1BgOpacity2_9+=0.01;
			
			bookPage1BgOpacity2_9+=0.01;
			bookPage2BgOpacity2_9+=0.01;
			bookPage3BgOpacity2_9+=0.01;
			bookPage4BgOpacity2_9+=0.01;
			bookPage5BgOpacity2_9+=0.01;
			bookPage6BgOpacity2_9+=0.01;
			bookPage7BgOpacity2_9+=0.01;
			bookPage8BgOpacity2_9+=0.01;
			
			bookPage9BgTop2_9=256;
			
			bookPage10BgOpacity2_9+=0.01;
			
			chapter1Opacity2_9+=0.01;
			
			page1Opacity2_9+=0.01;
			page2Opacity2_9+=0.01;
			page3Opacity2_9+=0.01;
			page4Opacity2_9+=0.01;
			page5Opacity2_9+=0.01;
			page6Opacity2_9+=0.01;
			page7Opacity2_9+=0.01;
			page8Opacity2_9+=0.01;
			
			page9Top2_9=258;
			
			page10Opacity2_9+=0.01;
			
			if(bookPage1BgOpacity2_9>=1)
			{
				bookChapter1BgOpacity2_9=1;
				
				bookPage1BgOpacity2_9=1;
				bookPage2BgOpacity2_9=1;
				bookPage3BgOpacity2_9=1;
				bookPage4BgOpacity2_9=1;
				bookPage5BgOpacity2_9=1;
				bookPage6BgOpacity2_9=1;
				bookPage7BgOpacity2_9=1;
				bookPage8BgOpacity2_9=1;
				
				bookPage10BgOpacity2_9=1;
				
				chapter1Opacity2_9=1;
				
				page1Opacity2_9=1;
				page2Opacity2_9=1;
				page3Opacity2_9=1;
				page4Opacity2_9=1;
				page5Opacity2_9=1;
				page6Opacity2_9=1;
				page7Opacity2_9=1;
				page8Opacity2_9=1;
				
				page10Opacity2_9=1;
				
				isParagraphAnimated2_9=true;
				
				if(isParagraphAnimated2_9==true)
				{
					bookChapter1BgOpacity2_9=0;
				
					bookPage1BgOpacity2_9=0;
					bookPage2BgOpacity2_9=0;
					bookPage3BgOpacity2_9=0;
					bookPage4BgOpacity2_9=0;
					bookPage5BgOpacity2_9=0;
					bookPage6BgOpacity2_9=0;
					bookPage7BgOpacity2_9=0;
					bookPage8BgOpacity2_9=0;
					
					bookPage9BgTop2_9=-52;
					
					bookPage10BgOpacity2_9=0;
					
					bookParagraphBg9Opacity2_9=1;
					
					chapter1Opacity2_9=0;
					
					page1Opacity2_9=0;
					page2Opacity2_9=0;
					page3Opacity2_9=0;
					page4Opacity2_9=0;
					page5Opacity2_9=0;
					page6Opacity2_9=0;
					page7Opacity2_9=0;
					page8Opacity2_9=0;
					
					page9Top2_9=-50;
					
					page10Opacity2_9=0;
					
					paragraph1Opacity2_9=1;
					paragraph2Opacity2_9=1;
					paragraph3Opacity2_9=1;
					paragraph4Opacity2_9=1;
					paragraph5Opacity2_9=1;
		
				}
				
				window.clearInterval(paragraphAnimate2_9);
			}
		}
	}
	
	bookParagraphBg9Opacity2_9-=0.01;
	
	paragraph1Opacity2_9-=0.01;
	paragraph2Opacity2_9-=0.01;
	paragraph3Opacity2_9-=0.01;
	paragraph4Opacity2_9-=0.01;
	paragraph5Opacity2_9-=0.01;
}

window.addEventListener("load",bookSetup3_9,false);