/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess4;
var bookChapter1BgOpacity1_4=1;
var bookChapter1BgOpacity2_4=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess4;
var bookPage1BgOpacity1_4=1;
var bookPage1BgOpacity2_4=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess4;
var bookPage2BgOpacity1_4=1;
var bookPage2BgOpacity2_4=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess4;
var bookPage3BgOpacity1_4=1;
var bookPage3BgOpacity2_4=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess4;
var bookPage4BgTop1_4=96;
var bookPage4BgTop2_4=-52;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess4;
var bookPage5BgOpacity1_4=1;
var bookPage5BgOpacity2_4=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess4;
var bookPage6BgOpacity1_4=1;
var bookPage6BgOpacity2_4=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess4;
var bookPage7BgOpacity1_4=1;
var bookPage7BgOpacity2_4=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess4;
var bookPage8BgOpacity1_4=1;
var bookPage8BgOpacity2_4=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess4;
var bookPage9BgOpacity1_4=1;
var bookPage9BgOpacity2_4=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess4;
var bookPage10BgOpacity1_4=1;
var bookPage10BgOpacity2_4=0;

//Variables required to manipulate the Book Paragraph Bg 4 element
var bookParagraph4BgAccess4;
var bookParagraph4BgOpacity1_4=0;
var bookParagraph4BgOpacity2_4=1;

//Variables required to manipulate the Chapter 1 element
var chapter1Access4;
var chapter1Opacity1_4=1;
var chapter1Opacity2_4=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_4=false;
var isParagraphAnimated2_4=false;

//Variables required to manipulate the Page 1 element
var page1Access4;
var page1Opacity1_4=1;
var page1Opacity2_4=0;

//Variables required to manipulate the Page 2 element
var page2Access4;
var page2Opacity1_4=1;
var page2Opacity2_4=0;

//Variables required to manipulate the Page 3 element
var page3Access4;
var page3Opacity1_4=1;
var page3Opacity2_4=0;

//Variables required to manipulate the Page 4 element
var page4Access4;
var page4Top1_4=98;
var page4Top2_4=-50;

//Variables required to manipulate the Page 5 element
var page5Access4;
var page5Opacity1_4=1;
var page5Opacity2_4=0;

//Variables required to manipulate the Page 6 element
var page6Access4;
var page6Opacity1_4=1;
var page6Opacity2_4=0;

//Variables required to manipulate the Page 7 element
var page7Access4;
var page7Opacity1_4=1;
var page7Opacity2_4=0;

//Variables required to manipulate the Page 8 element
var page8Access4;
var page8Opacity1_4=1;
var page8Opacity2_4=0;

//Variables required to manipulate the Page 9 element
var page9Access4;
var page9Opacity1_4=1;
var page9Opacity2_4=0;

//Variables required to manipulate the Page 10 element
var page10Access4;
var page10Opacity1_4=1;
var page10Opacity2_4=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access4;
var paragraph1Opacity1_4=0;
var paragraph1Opacity2_4=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access4;
var paragraph2Opacity1_4=0;
var paragraph2Opacity2_4=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access4;
var paragraph3Opacity1_4=0;
var paragraph3Opacity2_4=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access4;
var paragraph4Opacity1_4=0;
var paragraph4Opacity2_4=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access4;
var paragraph5Opacity1_4=0;
var paragraph5Opacity2_4=1;

var paragraphAnimate1_4;
var paragraphAnimate2_4;

function bookSetup3_4()
{
	bookParagraph4BgAccess4=document.getElementById("bookParagraphBg4");
	bookParagraph4BgAccess4.addEventListener("click",animateParagraphs2_4,false);
	
	page4Access4=document.getElementById("page4");
	page4Access4.addEventListener("click",animateParagraphs1_4,false);
}

function animateParagraphs1_4()
{
	paragraphAnimate1_4=window.setInterval(showPage4Paragraphs4,15);
}

function animateParagraphs2_4()
{
	paragraphAnimate2_4=window.setInterval(hidePage4Paragraphs4,15);
}

function showPage4Paragraphs4()
{
	bookChapter1BgAccess4=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess4=document.getElementById("bookPage1Bg");
	bookPage2BgAccess4=document.getElementById("bookPage2Bg");
	bookPage3BgAccess4=document.getElementById("bookPage3Bg");
	bookPage4BgAccess4=document.getElementById("bookPage4Bg");
	bookPage5BgAccess4=document.getElementById("bookPage5Bg");
	bookPage6BgAccess4=document.getElementById("bookPage6Bg");
	bookPage7BgAccess4=document.getElementById("bookPage7Bg");
	bookPage8BgAccess4=document.getElementById("bookPage8Bg");
	bookPage9BgAccess4=document.getElementById("bookPage9Bg");
	bookPage10BgAccess4=document.getElementById("bookPage10Bg");
	
	bookParagraph4BgAccess4=document.getElementById("bookParagraphBg4");
	
	chapter1Access4=document.getElementById("chapter1");
	
	page1Access4=document.getElementById("page1");
	page2Access4=document.getElementById("page2");
	page3Access4=document.getElementById("page3");
	page4Access4=document.getElementById("page4");
	page5Access4=document.getElementById("page5");
	page6Access4=document.getElementById("page6");
	page7Access4=document.getElementById("page7");
	page8Access4=document.getElementById("page8");
	page9Access4=document.getElementById("page9");
	page10Access4=document.getElementById("page10");
	
	paragraph1Access4=document.getElementById("bookParagraph4-1");
	paragraph2Access4=document.getElementById("bookParagraph4-2");
	paragraph3Access4=document.getElementById("bookParagraph4-3");
	paragraph4Access4=document.getElementById("bookParagraph4-4");
	paragraph5Access4=document.getElementById("bookParagraph4-5");
	
	bookChapter1BgAccess4.style.opacity=bookChapter1BgOpacity1_4;
	
	bookPage1BgAccess4.style.opacity=bookPage1BgOpacity1_4;
	bookPage2BgAccess4.style.opacity=bookPage2BgOpacity1_4;
	bookPage3BgAccess4.style.opacity=bookPage3BgOpacity1_4;
	
	bookPage4BgAccess4.style.top=bookPage4BgTop1_4+"px";
	
	bookPage5BgAccess4.style.opacity=bookPage5BgOpacity1_4;
	bookPage6BgAccess4.style.opacity=bookPage6BgOpacity1_4;
	bookPage7BgAccess4.style.opacity=bookPage7BgOpacity1_4;
	bookPage8BgAccess4.style.opacity=bookPage8BgOpacity1_4;
	bookPage9BgAccess4.style.opacity=bookPage9BgOpacity1_4;
	bookPage10BgAccess4.style.opacity=bookPage10BgOpacity1_4;
	
	bookParagraph4BgAccess4.style.display="block";
	bookParagraph4BgAccess4.style.opacity=bookParagraph4BgOpacity1_4;
	
	chapter1Access4.style.opacity=chapter1Opacity1_4;
	
	page1Access4.style.opacity=page1Opacity1_4;
	page2Access4.style.opacity=page2Opacity1_4;
	page3Access4.style.opacity=page3Opacity1_4;
	
	page4Access4.style.top=page4Top1_4+"px";
	
	page5Access4.style.opacity=page5Opacity1_4;
	page6Access4.style.opacity=page6Opacity1_4;
	page7Access4.style.opacity=page7Opacity1_4;
	page8Access4.style.opacity=page8Opacity1_4;
	page9Access4.style.opacity=page9Opacity1_4;
	page10Access4.style.opacity=page10Opacity1_4;
	
	paragraph1Access4.style.display="block";
	paragraph1Access4.style.opacity=paragraph1Opacity1_4;
	
	paragraph2Access4.style.display="block";
	paragraph2Access4.style.opacity=paragraph2Opacity1_4;
	
	paragraph3Access4.style.display="block";
	paragraph3Access4.style.opacity=paragraph3Opacity1_4;
	
	paragraph4Access4.style.display="block";
	paragraph4Access4.style.opacity=paragraph4Opacity1_4;
	
	paragraph5Access4.style.display="block";
	paragraph5Access4.style.opacity=paragraph5Opacity1_4;
	
	if(bookChapter1BgOpacity1_4<=0)
	{
		bookChapter1BgOpacity1_4=0;
		bookChapter1BgAccess4.style.display="none";
		
		bookPage1BgOpacity1_4=0;
		bookPage2BgOpacity1_4=0;
		bookPage3BgOpacity1_4=0;
		
		bookPage4BgTop1_4-=0.5;
		
		bookPage5BgOpacity1_4=0;
		bookPage6BgOpacity1_4=0;
		bookPage7BgOpacity1_4=0;
		bookPage8BgOpacity1_4=0;
		bookPage9BgOpacity1_4=0;
		bookPage10BgOpacity1_4=0;
		
		bookPage1BgAccess4.style.display="none";
		bookPage2BgAccess4.style.display="none";
		bookPage3BgAccess4.style.display="none";
		
		bookPage5BgAccess4.style.display="none";
		bookPage6BgAccess4.style.display="none";
		bookPage7BgAccess4.style.display="none";
		bookPage8BgAccess4.style.display="none";
		bookPage9BgAccess4.style.display="none";
		bookPage10BgAccess4.style.display="none";
		
		chapter1Opacity1_4=0;
		
		page1Opacity1_4=0;
		page2Opacity1_4=0;
		page3Opacity1_4=0;
		
		page4Top1_4-=0.5;
		
		page5Opacity1_4=0;
		page6Opacity1_4=0;
		page7Opacity1_4=0;
		page8Opacity1_4=0;
		page9Opacity1_4=0;
		page10Opacity1_4=0;
		
		page1Access4.style.display="none";
		page2Access4.style.display="none";
		page3Access4.style.display="none";
		
		page5Access4.style.display="none";
		page6Access4.style.display="none";
		page7Access4.style.display="none";
		page8Access4.style.display="none";
		page9Access4.style.display="none";
		page10Access4.style.display="none";
		
		if(bookPage4BgTop1_4<=-52)
		{
			bookPage4BgTop1_4=-52;
			
			bookParagraph4BgOpacity1_4+=0.01;
			
			page4Top1_4=-50;
			
			paragraph1Opacity1_4+=0.01;
			paragraph2Opacity1_4+=0.01;
			paragraph3Opacity1_4+=0.01;
			paragraph4Opacity1_4+=0.01;
			paragraph5Opacity1_4+=0.01;
			
			if(bookParagraph4BgOpacity1_4>=1)
			{
				bookParagraph4BgOpacity1_4=1;
				
				paragraph1Opacity1_4=1;
				paragraph2Opacity1_4=1;
				paragraph3Opacity1_4=1;
				paragraph4Opacity1_4=1;
				paragraph5Opacity1_4=1;
				
				isParagraphAnimated1_4=true;
				
				if(isParagraphAnimated1_4==true)
				{
					bookChapter1BgOpacity1_4=1;
					
					bookPage1BgOpacity1_4=1;
					bookPage2BgOpacity1_4=1;
					bookPage3BgOpacity1_4=1;
					
					bookPage4BgTop1_4=96;
					
					bookPage5BgOpacity1_4=1;
					bookPage6BgOpacity1_4=1;
					bookPage7BgOpacity1_4=1;
					bookPage8BgOpacity1_4=1;
					bookPage9BgOpacity1_4=1;
					bookPage10BgOpacity1_4=1;
					
					bookParagraph4BgOpacity1_4=0;
				
					chapter1Opacity1_4=1;
					
					page1Opacity1_4=1;
					page2Opacity1_4=1;
					page3Opacity1_4=1;
					
					page4Top1_4=98;
					
					page5Opacity1_4=1;
					page6Opacity1_4=1;
					page7Opacity1_4=1;
					page8Opacity1_4=1;
					page9Opacity1_4=1;
					page10Opacity1_4=1;
					
					paragraph1Opacity1_4=0;
					paragraph2Opacity1_4=0;
					paragraph3Opacity1_4=0;
					paragraph4Opacity1_4=0;
					paragraph5Opacity1_4=0;
				
				}
				
				window.clearInterval(paragraphAnimate1_4);
			}
		}
	}
	
	bookChapter1BgOpacity1_4-=0.01;
	
	bookPage1BgOpacity1_4-=0.01;
	bookPage2BgOpacity1_4-=0.01;
	bookPage3BgOpacity1_4-=0.01;
	
	bookPage5BgOpacity1_4-=0.01;
	bookPage6BgOpacity1_4-=0.01;
	bookPage7BgOpacity1_4-=0.01;
	bookPage8BgOpacity1_4-=0.01;
	bookPage9BgOpacity1_4-=0.01;
	bookPage10BgOpacity1_4-=0.01;
	
	chapter1Opacity1_4-=0.01;
	
	page1Opacity1_4-=0.01;
	page2Opacity1_4-=0.01;
	page3Opacity1_4-=0.01;
	
	page5Opacity1_4-=0.01;
	page6Opacity1_4-=0.01;
	page7Opacity1_4-=0.01;
	page8Opacity1_4-=0.01;
	page9Opacity1_4-=0.01;
	page10Opacity1_4-=0.01;
}

function hidePage4Paragraphs4()
{
	bookChapter1BgAccess4=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess4=document.getElementById("bookPage1Bg");
	bookPage2BgAccess4=document.getElementById("bookPage2Bg");
	bookPage3BgAccess4=document.getElementById("bookPage3Bg");
	bookPage4BgAccess4=document.getElementById("bookPage4Bg");
	bookPage5BgAccess4=document.getElementById("bookPage5Bg");
	bookPage6BgAccess4=document.getElementById("bookPage6Bg");
	bookPage7BgAccess4=document.getElementById("bookPage7Bg");
	bookPage8BgAccess4=document.getElementById("bookPage8Bg");
	bookPage9BgAccess4=document.getElementById("bookPage9Bg");
	bookPage10BgAccess4=document.getElementById("bookPage10Bg");
	
	bookParagraph4BgAccess4=document.getElementById("bookParagraphBg4");
	
	chapter1Access4=document.getElementById("chapter1");
	
	page1Access4=document.getElementById("page1");
	page2Access4=document.getElementById("page2");
	page3Access4=document.getElementById("page3");
	page4Access4=document.getElementById("page4");
	page5Access4=document.getElementById("page5");
	page6Access4=document.getElementById("page6");
	page7Access4=document.getElementById("page7");
	page8Access4=document.getElementById("page8");
	page9Access4=document.getElementById("page9");
	page10Access4=document.getElementById("page10");
	
	paragraph1Access4=document.getElementById("bookParagraph4-1");
	paragraph2Access4=document.getElementById("bookParagraph4-2");
	paragraph3Access4=document.getElementById("bookParagraph4-3");
	paragraph4Access4=document.getElementById("bookParagraph4-4");
	paragraph5Access4=document.getElementById("bookParagraph4-5");
	
	bookChapter1BgAccess4.style.display="block";
	bookChapter1BgAccess4.style.opacity=bookChapter1BgOpacity2_4;
	
	bookPage1BgAccess4.style.display="block";
	bookPage1BgAccess4.style.opacity=bookPage1BgOpacity2_4;
	
	bookPage2BgAccess4.style.display="block";
	bookPage2BgAccess4.style.opacity=bookPage2BgOpacity2_4;
	
	bookPage3BgAccess4.style.display="block";
	bookPage3BgAccess4.style.opacity=bookPage3BgOpacity2_4;
	
	bookPage4BgAccess4.style.top=bookPage4BgTop2_4+"px";
	
	bookPage5BgAccess4.style.display="block";
	bookPage5BgAccess4.style.opacity=bookPage5BgOpacity2_4;
	
	bookPage6BgAccess4.style.display="block";
	bookPage6BgAccess4.style.opacity=bookPage6BgOpacity2_4;
	
	bookPage7BgAccess4.style.display="block";
	bookPage7BgAccess4.style.opacity=bookPage7BgOpacity2_4;
	
	bookPage8BgAccess4.style.display="block";
	bookPage8BgAccess4.style.opacity=bookPage8BgOpacity2_4;
	
	bookPage9BgAccess4.style.display="block";
	bookPage9BgAccess4.style.opacity=bookPage9BgOpacity2_4;
	
	bookPage10BgAccess4.style.display="block";
	bookPage10BgAccess4.style.opacity=bookPage10BgOpacity2_4;
	
	bookParagraph4BgAccess4.style.opacity=bookParagraph4BgOpacity2_4;
	
	chapter1Access4.style.display="block";
	chapter1Access4.style.opacity=chapter1Opacity2_4;
	
	page1Access4.style.display="block";
	page1Access4.style.opacity=page1Opacity2_4;
	
	page2Access4.style.display="block";
	page2Access4.style.opacity=page2Opacity2_4;
	
	page3Access4.style.display="block";
	page3Access4.style.opacity=page3Opacity2_4;
	
	page4Access4.style.top=page4Top2_4+"px";
	
	page5Access4.style.display="block";
	page5Access4.style.opacity=page5Opacity2_4;
	
	page6Access4.style.display="block";
	page6Access4.style.opacity=page6Opacity2_4;
	
	page7Access4.style.display="block";
	page7Access4.style.opacity=page7Opacity2_4;
	
	page8Access4.style.display="block";
	page8Access4.style.opacity=page8Opacity2_4;
	
	page9Access4.style.display="block";
	page9Access4.style.opacity=page9Opacity2_4;
	
	page10Access4.style.display="block";
	page10Access4.style.opacity=page10Opacity2_4;
	
	paragraph1Access4.style.opacity=paragraph1Opacity2_4;
	paragraph2Access4.style.opacity=paragraph2Opacity2_4;
	paragraph3Access4.style.opacity=paragraph3Opacity2_4;
	paragraph4Access4.style.opacity=paragraph4Opacity2_4;
	paragraph5Access4.style.opacity=paragraph5Opacity2_4;
	
	if(bookParagraph4BgOpacity2_4<=0)
	{
		bookPage4BgTop2_4+=0.5;
		
		bookParagraph4BgOpacity2_4=0;
		bookParagraph4BgAccess4.style.display="none";
		
		page4Top2_4+=0.5;
		
		paragraph1Opacity2_4=0;
		paragraph2Opacity2_4=0;
		paragraph3Opacity2_4=0;
		paragraph4Opacity2_4=0;
		paragraph5Opacity2_4=0;
		
		paragraph1Access4.style.display="none";
		paragraph2Access4.style.display="none";
		paragraph3Access4.style.display="none";
		paragraph4Access4.style.display="none";
		paragraph5Access4.style.display="none";
		
		if(bookPage4BgTop2_4>=96)
		{
			bookChapter1BgOpacity2_4+=0.01;
			
			bookPage1BgOpacity2_4+=0.01;
			bookPage2BgOpacity2_4+=0.01;
			bookPage3BgOpacity2_4+=0.01;
			
			bookPage4BgTop2_4=96;
			
			bookPage5BgOpacity2_4+=0.01;
			bookPage6BgOpacity2_4+=0.01;
			bookPage7BgOpacity2_4+=0.01;
			bookPage8BgOpacity2_4+=0.01;
			bookPage9BgOpacity2_4+=0.01;
			bookPage10BgOpacity2_4+=0.01;
			
			chapter1Opacity2_4+=0.01;
			
			page1Opacity2_4+=0.01;
			page2Opacity2_4+=0.01;
			page3Opacity2_4+=0.01;
			
			page4Top2_4=98;
			
			page5Opacity2_4+=0.01;
			page6Opacity2_4+=0.01;
			page7Opacity2_4+=0.01;
			page8Opacity2_4+=0.01;
			page9Opacity2_4+=0.01;
			page10Opacity2_4+=0.01;
			
			if(bookPage1BgOpacity2_4>=1)
			{
				bookChapter1BgOpacity2_4=1;
				
				bookPage1BgOpacity2_4=1;
				bookPage2BgOpacity2_4=1;
				bookPage3BgOpacity2_4=1;
				
				bookPage5BgOpacity2_4=1;
				bookPage6BgOpacity2_4=1;
				bookPage7BgOpacity2_4=1;
				bookPage8BgOpacity2_4=1;
				bookPage9BgOpacity2_4=1;
				bookPage10BgOpacity2_4=1;
				
				chapter1Opacity2_4=1;
				
				page1Opacity2_4=1;
				page2Opacity2_4=1;
				page3Opacity2_4=1;
				
				page5Opacity2_4=1;
				page6Opacity2_4=1;
				page7Opacity2_4=1;
				page8Opacity2_4=1;
				page9Opacity2_4=1;
				page10Opacity2_4=1;
				
				isParagraphAnimated2_4=true;
				
				if(isParagraphAnimated2_4==true)
				{
					bookChapter1BgOpacity2_4=0;
				
					bookPage1BgOpacity2_4=0;
					bookPage2BgOpacity2_4=0;
					bookPage3BgOpacity2_4=0;
					
					bookPage4BgTop2_4=-52;
					
					bookPage5BgOpacity2_4=0;
					bookPage6BgOpacity2_4=0;
					bookPage7BgOpacity2_4=0;
					bookPage8BgOpacity2_4=0;
					bookPage9BgOpacity2_4=0;
					bookPage10BgOpacity2_4=0;
					
					bookParagraph1BgOpacity2_4=1;
					bookParagraph2BgOpacity2_4=1;
					bookParagraph3BgOpacity2_4=1;
					bookParagraph4BgOpacity2_4=1;
					bookParagraph5BgOpacity2_4=1;
					
					chapter1Opacity2_4=0;
					
					page1Opacity2_4=0;
					page2Opacity2_4=0;
					page3Opacity2_4=0;
					
					page4Top2_4=-50;
					
					page5Opacity2_4=0;
					page6Opacity2_4=0;
					page7Opacity2_4=0;
					page8Opacity2_4=0;
					page9Opacity2_4=0;
					page10Opacity2_4=0;
					
					paragraph1Opacity2_4=1;
					paragraph2Opacity2_4=1;
					paragraph3Opacity2_4=1;
					paragraph4Opacity2_4=1;
					paragraph5Opacity2_4=1;
					
				}
				
				window.clearInterval(paragraphAnimate2_4);
			}
		}
	}
	
	bookParagraph4BgOpacity2_4-=0.01;
	
	paragraph1Opacity2_4-=0.01;
	paragraph2Opacity2_4-=0.01;
	paragraph3Opacity2_4-=0.01;
	paragraph4Opacity2_4-=0.01;
	paragraph5Opacity2_4-=0.01;
	
}

window.addEventListener("load",bookSetup3_4,false);