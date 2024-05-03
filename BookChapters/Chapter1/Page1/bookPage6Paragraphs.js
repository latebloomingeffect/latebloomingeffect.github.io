/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess6;
var bookChapter1BgOpacity1_6=1;
var bookChapter1BgOpacity2_6=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess6;
var bookPage1BgOpacity1_6=1;
var bookPage1BgOpacity2_6=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess6;
var bookPage2BgOpacity1_6=1;
var bookPage2BgOpacity2_6=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess6;
var bookPage3BgOpacity1_6=1;
var bookPage3BgOpacity2_6=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess6;
var bookPage4BgOpacity1_6=1;
var bookPage4BgOpacity2_6=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess6;
var bookPage5BgOpacity1_6=1;
var bookPage5BgOpacity2_6=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess6;
var bookPage6BgTop1_6=160;
var bookPage6BgTop2_6=-52;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess6;
var bookPage7BgOpacity1_6=1;
var bookPage7BgOpacity2_6=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess6;
var bookPage8BgOpacity1_6=1;
var bookPage8BgOpacity2_6=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess6;
var bookPage9BgOpacity1_6=1;
var bookPage9BgOpacity2_6=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess6;
var bookPage10BgOpacity1_6=1;
var bookPage10BgOpacity2_6=0;

//Variables required to manipulate the Book Paragraph Bg 5 element
var bookParagraphBg6Access6;
var bookParagraphBg6Opacity1_6=0;
var bookParagraphBg6Opacity2_6=1;

//Variables required to manipulate the chapter 1 element
var chapter1Access6;
var chapter1Opacity1_6=1;
var chapter1Opacity2_6=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_6=false;
var isParagraphAnimated2_6=false;

//Variables required to manipulate the Page 1 element
var page1Access6;
var page1Opacity1_6=1;
var page1Opacity2_6=0;

//Variables required to manipulate the Page 2 element
var page2Access6;
var page2Opacity1_6=1;
var page2Opacity2_6=0;

//Variables required to manipulate the Page 3 element
var page3Access6;
var page3Opacity1_6=1;
var page3Opacity2_6=0;

//Variables required to manipulate the Page 4 element
var page4Access6;
var page4Opacity1_6=1;
var page4Opacity2_6=0;

//Variables required to manipulate the Page 5 element
var page5Access6;
var page5Opacity1_6=1;
var page5Opacity2_6=0;

//Variables required to manipulate the Page 6 element
var page6Access6;
var page6Top1_6=162;
var page6Top2_6=-50;

//Variables required to manipulate the Page 7 element
var page7Access6;
var page7Opacity1_6=1;
var page7Opacity2_6=0;

//Variables required to manipulate the Page 8 element
var page8Access6;
var page8Opacity1_6=1;
var page8Opacity2_6=0;

//Variables required to manipulate the Page 9 element
var page9Access6;
var page9Opacity1_6=1;
var page9Opacity2_6=0;

//Variables required to manipulate the Page 10 element
var page10Access6;
var page10Opacity1_6=1;
var page10Opacity2_6=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access6;
var paragraph1Opacity1_6=0;
var paragraph1Opacity2_6=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access6;
var paragraph2Opacity1_6=0;
var paragraph2Opacity2_6=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access6;
var paragraph3Opacity1_6=0;
var paragraph3Opacity2_6=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access6;
var paragraph4Opacity1_6=0;
var paragraph4Opacity2_6=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access6;
var paragraph5Opacity1_6=0;
var paragraph5Opacity2_6=1;

var paragraphAnimate1_6;
var paragraphAnimate2_6;

function bookSetup3_6()
{
	bookParagraphBg6Access6=document.getElementById("bookParagraphBg6");
	bookParagraphBg6Access6.addEventListener("click",animateParagraphs2_6,false);
	
	page6Access6=document.getElementById("page6");
	page6Access6.addEventListener("click",animateParagraphs1_6,false);
}

function animateParagraphs1_6()
{
	paragraphAnimate1_6=window.setInterval(showPage6Paragraphs6,15);
}

function animateParagraphs2_6()
{
	paragraphAnimate2_6=window.setInterval(hidePage6Paragraphs6,15);
}

function showPage6Paragraphs6()
{
	bookChapter1BgAccess6=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess6=document.getElementById("bookPage1Bg");
	bookPage2BgAccess6=document.getElementById("bookPage2Bg");
	bookPage3BgAccess6=document.getElementById("bookPage3Bg");
	bookPage4BgAccess6=document.getElementById("bookPage4Bg");
	bookPage5BgAccess6=document.getElementById("bookPage5Bg");
	bookPage6BgAccess6=document.getElementById("bookPage6Bg");
	bookPage7BgAccess6=document.getElementById("bookPage7Bg");
	bookPage8BgAccess6=document.getElementById("bookPage8Bg");
	bookPage9BgAccess6=document.getElementById("bookPage9Bg");
	bookPage10BgAccess6=document.getElementById("bookPage10Bg");
	
	bookParagraphBg6Access6=document.getElementById("bookParagraphBg6");
	
	chapter1Access6=document.getElementById("chapter1");
	
	page1Access6=document.getElementById("page1");
	page2Access6=document.getElementById("page2");
	page3Access6=document.getElementById("page3");
	page4Access6=document.getElementById("page4");
	page5Access6=document.getElementById("page5");
	page6Access6=document.getElementById("page6");
	page7Access6=document.getElementById("page7");
	page8Access6=document.getElementById("page8");
	page9Access6=document.getElementById("page9");
	page10Access6=document.getElementById("page10");
	
	paragraph1Access6=document.getElementById("bookParagraph6-1");
	paragraph2Access6=document.getElementById("bookParagraph6-2");
	paragraph3Access6=document.getElementById("bookParagraph6-3");
	paragraph4Access6=document.getElementById("bookParagraph6-4");
	paragraph5Access6=document.getElementById("bookParagraph6-5");
	
	bookChapter1BgAccess6.style.opacity=bookChapter1BgOpacity1_6;
	
	bookPage1BgAccess6.style.opacity=bookPage1BgOpacity1_6;
	bookPage2BgAccess6.style.opacity=bookPage2BgOpacity1_6;
	bookPage3BgAccess6.style.opacity=bookPage3BgOpacity1_6;
	bookPage4BgAccess6.style.opacity=bookPage4BgOpacity1_6;
	bookPage5BgAccess6.style.opacity=bookPage5BgOpacity1_6;
	
	bookPage6BgAccess6.style.top=bookPage6BgTop1_6+"px";
	
	bookPage7BgAccess6.style.opacity=bookPage7BgOpacity1_6;
	bookPage8BgAccess6.style.opacity=bookPage8BgOpacity1_6;
	bookPage9BgAccess6.style.opacity=bookPage9BgOpacity1_6;
	bookPage10BgAccess6.style.opacity=bookPage10BgOpacity1_6;
	
	bookParagraphBg6Access6.style.display="block";
	bookParagraphBg6Access6.style.opacity=bookParagraphBg6Opacity1_6;
	
	chapter1Access6.style.opacity=chapter1Opacity1_6;
	
	page1Access6.style.opacity=page1Opacity1_6;
	page2Access6.style.opacity=page2Opacity1_6;
	page3Access6.style.opacity=page3Opacity1_6;
	page4Access6.style.opacity=page4Opacity1_6;
	page5Access6.style.opacity=page5Opacity1_6;
	
	page6Access6.style.top=page6Top1_6+"px";
	
	page7Access6.style.opacity=page7Opacity1_6;
	page8Access6.style.opacity=page8Opacity1_6;
	page9Access6.style.opacity=page9Opacity1_6;
	page10Access6.style.opacity=page10Opacity1_6;
	
	paragraph1Access6.style.display="block";
	paragraph1Access6.style.opacity=paragraph1Opacity1_6;
	
	paragraph2Access6.style.display="block";
	paragraph2Access6.style.opacity=paragraph2Opacity1_6;
	
	paragraph3Access6.style.display="block";
	paragraph3Access6.style.opacity=paragraph3Opacity1_6;
	
	paragraph4Access6.style.display="block";
	paragraph4Access6.style.opacity=paragraph4Opacity1_6;
	
	paragraph5Access6.style.display="block";
	paragraph5Access6.style.opacity=paragraph5Opacity1_6;
	
	if(bookChapter1BgOpacity1_6<=0)
	{
		bookChapter1BgOpacity1_6=0;
		bookChapter1BgAccess6.style.display="none";
		
		bookPage1BgOpacity1_6=0;
		bookPage2BgOpacity1_6=0;
		bookPage3BgOpacity1_6=0;
		bookPage4BgOpacity1_6=0;
		bookPage5BgOpacity1_6=0;
		
		bookPage7BgOpacity1_6=0;
		bookPage8BgOpacity1_6=0;
		bookPage9BgOpacity1_6=0;
		bookPage10BgOpacity1_6=0;
		
		bookPage1BgAccess6.style.display="none";
		bookPage2BgAccess6.style.display="none";
		bookPage3BgAccess6.style.display="none";
		bookPage4BgAccess6.style.display="none";
		bookPage5BgAccess6.style.display="none";
		
		bookPage7BgAccess6.style.display="none";
		bookPage8BgAccess6.style.display="none";
		bookPage9BgAccess6.style.display="none";
		bookPage10BgAccess6.style.display="none";
		
		bookPage6BgTop1_6-=0.5;
		
		chapter1Opacity1_6=0;
		chapter1Access6.style.display="none";
		
		page1Opacity1_6=0;
		page2Opacity1_6=0;
		page3Opacity1_6=0;
		page4Opacity1_6=0;
		page5Opacity1_6=0;
		
		page7Opacity1_6=0;
		page8Opacity1_6=0;
		page9Opacity1_6=0;
		page10Opacity1_6=0;
		
		page1Access6.style.display="none";
		page2Access6.style.display="none";
		page3Access6.style.display="none";
		page4Access6.style.display="none";
		page5Access6.style.display="none";
		
		page7Access6.style.display="none";
		page8Access6.style.display="none";
		page9Access6.style.display="none";
		page10Access6.style.display="none";
		
		page6Top1_6-=0.5;
		
		if(bookPage6BgTop1_6<=-52)
		{
			bookPage6BgTop1_6=-52;
			
			bookParagraphBg6Opacity1_6+=0.01;
			
			page6Top1_6=-50;
			
			paragraph1Opacity1_6+=0.01;
			paragraph2Opacity1_6+=0.01;
			paragraph3Opacity1_6+=0.01;
			paragraph4Opacity1_6+=0.01;
			paragraph5Opacity1_6+=0.01;
			
			if(bookParagraphBg6Opacity1_6>=1)
			{
				bookParagraphBg6Opacity1_6=1;
				
				paragraph1Opacity1_6=1;
				paragraph2Opacity1_6=1;
				paragraph3Opacity1_6=1;
				paragraph4Opacity1_6=1;
				paragraph5Opacity1_6=1;
				
				isParagraphAnimated1_6=true;
				
				if(isParagraphAnimated1_6==true)
				{
					bookChapter1BgOpacity1_6=1;
		
					bookPage1BgOpacity1_6=1;
					bookPage2BgOpacity1_6=1;
					bookPage3BgOpacity1_6=1;
					bookPage4BgOpacity1_6=1;
					bookPage5BgOpacity1_6=1;
					
					bookPage6BgTop1_6=160;
					
					bookPage7BgOpacity1_6=1;
					bookPage8BgOpacity1_6=1;
					bookPage9BgOpacity1_6=1;
					bookPage10BgOpacity1_6=1;
					
					bookParagraphBg6Opacity1_6=0;
					
					chapter1Opacity1_6=1;
		
					page1Opacity1_6=1;
					page2Opacity1_6=1;
					page3Opacity1_6=1;
					page4Opacity1_6=1;
					page5Opacity1_6=1;
					
					page6Top1_6=162;
					
					page7Opacity1_6=1;
					page8Opacity1_6=1;
					page9Opacity1_6=1;
					page10Opacity1_6=1;
					
					paragraph1Opacity1_6=0;
					paragraph2Opacity1_6=0;
					paragraph3Opacity1_6=0;
					paragraph4Opacity1_6=0;
					paragraph5Opacity1_6=0;
				}
				window.clearInterval(paragraphAnimate1_6);
			}
		}
	}
	
	bookChapter1BgOpacity1_6-=0.01;
	
	bookPage1BgOpacity1_6-=0.01;
	bookPage2BgOpacity1_6-=0.01;
	bookPage3BgOpacity1_6-=0.01;
	bookPage4BgOpacity1_6-=0.01;
	bookPage5BgOpacity1_6-=0.01;
	
	bookPage7BgOpacity1_6-=0.01;
	bookPage8BgOpacity1_6-=0.01;
	bookPage9BgOpacity1_6-=0.01;
	bookPage10BgOpacity1_6-=0.01;
	
	chapter1Opacity1_6-=0.01;
	
	page1Opacity1_6-=0.01;
	page2Opacity1_6-=0.01;
	page3Opacity1_6-=0.01;
	page4Opacity1_6-=0.01;
	page5Opacity1_6-=0.01;
	
	page7Opacity1_6-=0.01;
	page8Opacity1_6-=0.01;
	page9Opacity1_6-=0.01;
	page10Opacity1_6-=0.01;
}

function hidePage6Paragraphs6()
{
	bookChapter1BgAccess6=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg5Access6=document.getElementById("bookParagraphBg5");
	
	bookPage1BgAccess6=document.getElementById("bookPage1Bg");
	bookPage2BgAccess6=document.getElementById("bookPage2Bg");
	bookPage3BgAccess6=document.getElementById("bookPage3Bg");
	bookPage4BgAccess6=document.getElementById("bookPage4Bg");
	bookPage5BgAccess6=document.getElementById("bookPage5Bg");
	bookPage6BgAccess6=document.getElementById("bookPage6Bg");
	bookPage7BgAccess6=document.getElementById("bookPage7Bg");
	bookPage8BgAccess6=document.getElementById("bookPage8Bg");
	bookPage9BgAccess6=document.getElementById("bookPage9Bg");
	bookPage10BgAccess6=document.getElementById("bookPage10Bg");
	
	chapter1Access6=document.getElementById("chapter1");
	
	page1Access6=document.getElementById("page1");
	page2Access6=document.getElementById("page2");
	page3Access6=document.getElementById("page3");
	page4Access6=document.getElementById("page4");
	page5Access6=document.getElementById("page5");
	page6Access6=document.getElementById("page6");
	page7Access6=document.getElementById("page7");
	page8Access6=document.getElementById("page8");
	page9Access6=document.getElementById("page9");
	page10Access6=document.getElementById("page10");
	
	paragraph1Access6=document.getElementById("bookParagraph6-1");
	paragraph2Access6=document.getElementById("bookParagraph6-2");
	paragraph3Access6=document.getElementById("bookParagraph6-3");
	paragraph4Access6=document.getElementById("bookParagraph6-4");
	paragraph5Access6=document.getElementById("bookParagraph6-5");
	
	bookChapter1BgAccess6.style.display="block";
	bookChapter1BgAccess6.style.opacity=bookChapter1BgOpacity2_6;
	
	bookPage1BgAccess6.style.display="block";
	bookPage1BgAccess6.style.opacity=bookPage1BgOpacity2_6;
	
	bookPage2BgAccess6.style.display="block";
	bookPage2BgAccess6.style.opacity=bookPage2BgOpacity2_6;
	
	bookPage3BgAccess6.style.display="block";
	bookPage3BgAccess6.style.opacity=bookPage3BgOpacity2_6;
	
	bookPage4BgAccess6.style.display="block";
	bookPage4BgAccess6.style.opacity=bookPage4BgOpacity2_6;
	
	bookPage5BgAccess6.style.display="block";
	bookPage5BgAccess6.style.opacity=bookPage5BgOpacity2_6;
	
	bookPage6BgAccess6.style.top=bookPage6BgTop2_6+"px";
	
	bookPage7BgAccess6.style.display="block";
	bookPage7BgAccess6.style.opacity=bookPage7BgOpacity2_6;
	
	bookPage8BgAccess6.style.display="block";
	bookPage8BgAccess6.style.opacity=bookPage8BgOpacity2_6;
	
	bookPage9BgAccess6.style.display="block";
	bookPage9BgAccess6.style.opacity=bookPage9BgOpacity2_6;
	
	bookPage10BgAccess6.style.display="block";
	bookPage10BgAccess6.style.opacity=bookPage10BgOpacity2_6;
	
	bookParagraphBg6Access6.style.opacity=bookParagraphBg6Opacity2_6;
	
	chapter1Access6.style.display="block";
	chapter1Access6.style.opacity=chapter1Opacity2_6;
	
	page1Access6.style.display="block";
	page1Access6.style.opacity=page1Opacity2_6;
	
	page2Access6.style.display="block";
	page2Access6.style.opacity=page2Opacity2_6;
	
	page3Access6.style.display="block";
	page3Access6.style.opacity=page3Opacity2_6;
	
	page4Access6.style.display="block";
	page4Access6.style.opacity=page4Opacity2_6;
	
	page5Access6.style.display="block";
	page5Access6.style.opacity=page5Opacity2_6;
	
	page6Access6.style.top=page6Top2_6+"px";
	
	page7Access6.style.display="block";
	page7Access6.style.opacity=page7Opacity2_6;
	
	page8Access6.style.display="block";
	page8Access6.style.opacity=page8Opacity2_6;
	
	page9Access6.style.display="block";
	page9Access6.style.opacity=page9Opacity2_6;
	
	page10Access6.style.display="block";
	page10Access6.style.opacity=page10Opacity2_6;
	
	paragraph1Access6.style.opacity=paragraph1Opacity2_6;
	paragraph2Access6.style.opacity=paragraph2Opacity2_6;
	paragraph3Access6.style.opacity=paragraph3Opacity2_6;
	paragraph4Access6.style.opacity=paragraph4Opacity2_6;
	paragraph5Access6.style.opacity=paragraph5Opacity2_6;
	
	if(bookParagraphBg6Opacity2_6<=0)
	{
		bookPage6BgTop2_6+=0.5;
		
		bookParagraphBg6Opacity2_6=0;
		bookParagraphBg6Access6.style.display="none";
		
		page6Top2_6+=0.5;
		
		paragraph1Opacity2_6=0;
		paragraph2Opacity2_6=0;
		paragraph3Opacity2_6=0;
		paragraph4Opacity2_6=0;
		paragraph5Opacity2_6=0;
		
		paragraph1Access6.style.display="none";
		paragraph2Access6.style.display="none";
		paragraph3Access6.style.display="none";
		paragraph4Access6.style.display="none";
		paragraph5Access6.style.display="none";
		
		if(bookPage6BgTop2_6>=128)
		{
			bookChapter1BgOpacity2_6+=0.01;
			
			bookPage1BgOpacity2_6+=0.01;
			bookPage2BgOpacity2_6+=0.01;
			bookPage3BgOpacity2_6+=0.01;
			bookPage4BgOpacity2_6+=0.01;
			bookPage5BgOpacity2_6+=0.01;
			
			bookPage6BgTop2_6=160;
			
			bookPage7BgOpacity2_6+=0.01;
			bookPage8BgOpacity2_6+=0.01;
			bookPage9BgOpacity2_6+=0.01;
			bookPage10BgOpacity2_6+=0.01;
			
			chapter1Opacity2_6+=0.01;
			
			page1Opacity2_6+=0.01;
			page2Opacity2_6+=0.01;
			page3Opacity2_6+=0.01;
			page4Opacity2_6+=0.01;
			page5Opacity2_6+=0.01;
			
			page6Top2_6=162;
			
			page7Opacity2_6+=0.01;
			page8Opacity2_6+=0.01;
			page9Opacity2_6+=0.01;
			page10Opacity2_6+=0.01;
			
			if(bookPage1BgOpacity2_6>=1)
			{
				bookChapter1BgOpacity2_6=1;
				
				bookPage1BgOpacity2_6=1;
				bookPage2BgOpacity2_6=1;
				bookPage3BgOpacity2_6=1;
				bookPage4BgOpacity2_6=1;
				bookPage5BgOpacity2_6=1;
				
				bookPage7BgOpacity2_6=1;
				bookPage8BgOpacity2_6=1;
				bookPage9BgOpacity2_6=1;
				bookPage10BgOpacity2_6=1;
				
				chapter1Opacity2_6=1;
				
				page1Opacity2_6=1;
				page2Opacity2_6=1;
				page3Opacity2_6=1;
				page4Opacity2_6=1;
				page5Opacity2_6=1;
				
				page7Opacity2_6=1;
				page8Opacity2_6=1;
				page9Opacity2_6=1;
				page10Opacity2_6=1;
				
				isParagraphAnimated2_6=true;
				
				if(isParagraphAnimated2_6==true)
				{
					bookChapter1BgOpacity2_6=0;
				
					bookPage1BgOpacity2_6=0;
					bookPage2BgOpacity2_6=0;
					bookPage3BgOpacity2_6=0;
					bookPage4BgOpacity2_6=0;
					bookPage5BgOpacity2_6=0;
					
					bookPage6BgTop2_6=-52;
					
					bookPage7BgOpacity2_6=0;
					bookPage8BgOpacity2_6=0;
					bookPage9BgOpacity2_6=0;
					bookPage10BgOpacity2_6=0;
					
					bookParagraphBg6Opacity2_6=1;
					
					chapter1Opacity2_6=0;
					
					page1Opacity2_6=0;
					page2Opacity2_6=0;
					page3Opacity2_6=0;
					page4Opacity2_6=0;
					page5Opacity2_6=0;
					
					page6Top2_6=-50;
					
					page7Opacity2_6=0;
					page8Opacity2_6=0;
					page9Opacity2_6=0;
					page10Opacity2_6=0;
					
					paragraph1Opacity2_6=1;
					paragraph2Opacity2_6=1;
					paragraph3Opacity2_6=1;
					paragraph4Opacity2_6=1;
					paragraph5Opacity2_6=1;
		
				}
				
				window.clearInterval(paragraphAnimate2_6);
			}
		}
	}
	
	bookParagraphBg6Opacity2_6-=0.01;
	
	paragraph1Opacity2_6-=0.01;
	paragraph2Opacity2_6-=0.01;
	paragraph3Opacity2_6-=0.01;
	paragraph4Opacity2_6-=0.01;
	paragraph5Opacity2_6-=0.01;
}

window.addEventListener("load",bookSetup3_6,false);