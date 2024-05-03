/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess5;
var bookChapter1BgOpacity1_5=1;
var bookChapter1BgOpacity2_5=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess5;
var bookPage1BgOpacity1_5=1;
var bookPage1BgOpacity2_5=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess5;
var bookPage2BgOpacity1_5=1;
var bookPage2BgOpacity2_5=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess5;
var bookPage3BgOpacity1_5=1;
var bookPage3BgOpacity2_5=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess5;
var bookPage4BgOpacity1_5=1;
var bookPage4BgOpacity2_5=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess5;
var bookPage5BgTop1_5=128;
var bookPage5BgTop2_5=-52;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess5;
var bookPage6BgOpacity1_5=1;
var bookPage6BgOpacity2_5=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess5;
var bookPage7BgOpacity1_5=1;
var bookPage7BgOpacity2_5=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess5;
var bookPage8BgOpacity1_5=1;
var bookPage8BgOpacity2_5=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess5;
var bookPage9BgOpacity1_5=1;
var bookPage9BgOpacity2_5=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess5;
var bookPage10BgOpacity1_5=1;
var bookPage10BgOpacity2_5=0;

//Variables required to manipulate the Book Paragraph Bg 5 element
var bookParagraphBg5Access5;
var bookParagraphBg5Opacity1_5=0;
var bookParagraphBg5Opacity2_5=1;

//Variables required to manipulate the chapter 1 element
var chapter1Access5;
var chapter1Opacity1_5=1;
var chapter1Opacity2_5=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_5=false;
var isParagraphAnimated2_5=false;

//Variables required to manipulate the Page 1 element
var page1Access5;
var page1Opacity1_5=1;
var page1Opacity2_5=0;

//Variables required to manipulate the Page 2 element
var page2Access5;
var page2Opacity1_5=1;
var page2Opacity2_5=0;

//Variables required to manipulate the Page 3 element
var page3Access5;
var page3Opacity1_5=1;
var page3Opacity2_5=0;

//Variables required to manipulate the Page 4 element
var page4Access5;
var page4Opacity1_5=1;
var page4Opacity2_5=0;

//Variables required to manipulate the Page 5 element
var page5Access5;
var page5Top1_5=130;
var page5Top2_5=-50;

//Variables required to manipulate the Page 6 element
var page6Access5;
var page6Opacity1_5=1;
var page6Opacity2_5=0;

//Variables required to manipulate the Page 7 element
var page7Access5;
var page7Opacity1_5=1;
var page7Opacity2_5=0;

//Variables required to manipulate the Page 8 element
var page8Access5;
var page8Opacity1_5=1;
var page8Opacity2_5=0;

//Variables required to manipulate the Page 9 element
var page9Access5;
var page9Opacity1_5=1;
var page9Opacity2_5=0;

//Variables required to manipulate the Page 10 element
var page10Access5;
var page10Opacity1_5=1;
var page10Opacity2_5=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access5;
var paragraph1Opacity1_5=0;
var paragraph1Opacity2_5=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access5;
var paragraph2Opacity1_5=0;
var paragraph2Opacity2_5=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access5;
var paragraph3Opacity1_5=0;
var paragraph3Opacity2_5=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access5;
var paragraph4Opacity1_5=0;
var paragraph4Opacity2_5=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access5;
var paragraph5Opacity1_5=0;
var paragraph5Opacity2_5=1;

var paragraphAnimate1_5;
var paragraphAnimate2_5;

function bookSetup3_5()
{
	bookParagraphBg5Access5=document.getElementById("bookParagraphBg5");
	bookParagraphBg5Access5.addEventListener("click",animateParagraphs2_5,false);
	
	page5Access5=document.getElementById("page5");
	page5Access5.addEventListener("click",animateParagraphs1_5,false);
}

function animateParagraphs1_5()
{
	paragraphAnimate1_5=window.setInterval(showPage5Paragraphs5,15);
}

function animateParagraphs2_5()
{
	paragraphAnimate2_5=window.setInterval(hidePage5Paragraphs5,15);
}

function showPage5Paragraphs5()
{
	bookChapter1BgAccess5=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess5=document.getElementById("bookPage1Bg");
	bookPage2BgAccess5=document.getElementById("bookPage2Bg");
	bookPage3BgAccess5=document.getElementById("bookPage3Bg");
	bookPage4BgAccess5=document.getElementById("bookPage4Bg");
	bookPage5BgAccess5=document.getElementById("bookPage5Bg");
	bookPage6BgAccess5=document.getElementById("bookPage6Bg");
	bookPage7BgAccess5=document.getElementById("bookPage7Bg");
	bookPage8BgAccess5=document.getElementById("bookPage8Bg");
	bookPage9BgAccess5=document.getElementById("bookPage9Bg");
	bookPage10BgAccess5=document.getElementById("bookPage10Bg");
	
	bookParagraphBg5Access5=document.getElementById("bookParagraphBg5");
	
	chapter1Access5=document.getElementById("chapter1");
	
	page1Access5=document.getElementById("page1");
	page2Access5=document.getElementById("page2");
	page3Access5=document.getElementById("page3");
	page4Access5=document.getElementById("page4");
	page5Access5=document.getElementById("page5");
	page6Access5=document.getElementById("page6");
	page7Access5=document.getElementById("page7");
	page8Access5=document.getElementById("page8");
	page9Access5=document.getElementById("page9");
	page10Access5=document.getElementById("page10");
	
	paragraph1Access5=document.getElementById("bookParagraph5-1");
	paragraph2Access5=document.getElementById("bookParagraph5-2");
	paragraph3Access5=document.getElementById("bookParagraph5-3");
	paragraph4Access5=document.getElementById("bookParagraph5-4");
	paragraph5Access5=document.getElementById("bookParagraph5-5");
	
	bookChapter1BgAccess5.style.opacity=bookChapter1BgOpacity1_5;
	
	bookPage1BgAccess5.style.opacity=bookPage1BgOpacity1_5;
	bookPage2BgAccess5.style.opacity=bookPage2BgOpacity1_5;
	bookPage3BgAccess5.style.opacity=bookPage3BgOpacity1_5;
	bookPage4BgAccess5.style.opacity=bookPage4BgOpacity1_5;
	
	bookPage5BgAccess5.style.top=bookPage5BgTop1_5+"px";
	
	bookPage6BgAccess5.style.opacity=bookPage6BgOpacity1_5;
	bookPage7BgAccess5.style.opacity=bookPage7BgOpacity1_5;
	bookPage8BgAccess5.style.opacity=bookPage8BgOpacity1_5;
	bookPage9BgAccess5.style.opacity=bookPage9BgOpacity1_5;
	bookPage10BgAccess5.style.opacity=bookPage10BgOpacity1_5;
	
	bookParagraphBg5Access5.style.display="block";
	bookParagraphBg5Access5.style.opacity=bookParagraphBg5Opacity1_5;
	
	chapter1Access5.style.opacity=chapter1Opacity1_5;
	
	page1Access5.style.opacity=page1Opacity1_5;
	page2Access5.style.opacity=page2Opacity1_5;
	page3Access5.style.opacity=page3Opacity1_5;
	page4Access5.style.opacity=page4Opacity1_5;
	
	page5Access5.style.top=page5Top1_5+"px";
	
	page6Access5.style.opacity=page6Opacity1_5;
	page7Access5.style.opacity=page7Opacity1_5;
	page8Access5.style.opacity=page8Opacity1_5;
	page9Access5.style.opacity=page9Opacity1_5;
	page10Access5.style.opacity=page10Opacity1_5;
	
	paragraph1Access5.style.display="block";
	paragraph1Access5.style.opacity=paragraph1Opacity1_5;
	
	paragraph2Access5.style.display="block";
	paragraph2Access5.style.opacity=paragraph2Opacity1_5;
	
	paragraph3Access5.style.display="block";
	paragraph3Access5.style.opacity=paragraph3Opacity1_5;
	
	paragraph4Access5.style.display="block";
	paragraph4Access5.style.opacity=paragraph4Opacity1_5;
	
	paragraph5Access5.style.display="block";
	paragraph5Access5.style.opacity=paragraph5Opacity1_5;
	
	if(bookChapter1BgOpacity1_5<=0)
	{
		bookChapter1BgOpacity1_5=0;
		bookChapter1BgAccess5.style.display="none";
		
		bookPage1BgOpacity1_5=0;
		bookPage2BgOpacity1_5=0;
		bookPage3BgOpacity1_5=0;
		bookPage4BgOpacity1_5=0;
		
		bookPage6BgOpacity1_5=0;
		bookPage7BgOpacity1_5=0;
		bookPage8BgOpacity1_5=0;
		bookPage9BgOpacity1_5=0;
		bookPage10BgOpacity1_5=0;
		
		bookPage1BgAccess5.style.display="none";
		bookPage2BgAccess5.style.display="none";
		bookPage3BgAccess5.style.display="none";
		bookPage4BgAccess5.style.display="none";
		
		bookPage6BgAccess5.style.display="none";
		bookPage7BgAccess5.style.display="none";
		bookPage8BgAccess5.style.display="none";
		bookPage9BgAccess5.style.display="none";
		bookPage10BgAccess5.style.display="none";
		
		bookPage5BgTop1_5-=0.5;
		
		chapter1Opacity1_5=0;
		chapter1Access5.style.display="none";
		
		page1Opacity1_5=0;
		page2Opacity1_5=0;
		page3Opacity1_5=0;
		page4Opacity1_5=0;
		
		page6Opacity1_5=0;
		page7Opacity1_5=0;
		page8Opacity1_5=0;
		page9Opacity1_5=0;
		page10Opacity1_5=0;
		
		page1Access5.style.display="none";
		page2Access5.style.display="none";
		page3Access5.style.display="none";
		page4Access5.style.display="none";
		
		page6Access5.style.display="none";
		page7Access5.style.display="none";
		page8Access5.style.display="none";
		page9Access5.style.display="none";
		page10Access5.style.display="none";
		
		page5Top1_5-=0.5;
		
		if(bookPage5BgTop1_5<=-52)
		{
			bookPage5BgTop1_5=-52;
			
			bookParagraphBg5Opacity1_5+=0.01;
			
			page5Top1_5=-50;
			
			paragraph1Opacity1_5+=0.01;
			paragraph2Opacity1_5+=0.01;
			paragraph3Opacity1_5+=0.01;
			paragraph4Opacity1_5+=0.01;
			paragraph5Opacity1_5+=0.01;
			
			if(bookParagraphBg5Opacity1_5>=1)
			{
				bookParagraphBg5Opacity1_5=1;
				
				paragraph1Opacity1_5=1;
				paragraph2Opacity1_5=1;
				paragraph3Opacity1_5=1;
				paragraph4Opacity1_5=1;
				paragraph5Opacity1_5=1;
				
				isParagraphAnimated1_5=true;
				
				if(isParagraphAnimated1_5==true)
				{
					bookChapter1BgOpacity1_5=1;
		
					bookPage1BgOpacity1_5=1;
					bookPage2BgOpacity1_5=1;
					bookPage3BgOpacity1_5=1;
					bookPage4BgOpacity1_5=1;
					
					bookPage5BgTop1_5=128;
					
					bookPage6BgOpacity1_5=1;
					bookPage7BgOpacity1_5=1;
					bookPage8BgOpacity1_5=1;
					bookPage9BgOpacity1_5=1;
					bookPage10BgOpacity1_5=1;
					
					bookParagraphBg5Opacity1_5=0;
					
					chapter1Opacity1_5=1;
		
					page1Opacity1_5=1;
					page2Opacity1_5=1;
					page3Opacity1_5=1;
					page4Opacity1_5=1;
		
					page5Top1_5=130;
					
					page6Opacity1_5=1;
					page7Opacity1_5=1;
					page8Opacity1_5=1;
					page9Opacity1_5=1;
					page10Opacity1_5=1;
					
					paragraph1Opacity1_5=0;
					paragraph2Opacity1_5=0;
					paragraph3Opacity1_5=0;
					paragraph4Opacity1_5=0;
					paragraph5Opacity1_5=0;
				}
				window.clearInterval(paragraphAnimate1_5);
			}
		}
	}
	
	bookChapter1BgOpacity1_5-=0.01;
	
	bookPage1BgOpacity1_5-=0.01;
	bookPage2BgOpacity1_5-=0.01;
	bookPage3BgOpacity1_5-=0.01;
	bookPage4BgOpacity1_5-=0.01;
	
	bookPage6BgOpacity1_5-=0.01;
	bookPage7BgOpacity1_5-=0.01;
	bookPage8BgOpacity1_5-=0.01;
	bookPage9BgOpacity1_5-=0.01;
	bookPage10BgOpacity1_5-=0.01;
	
	chapter1Opacity1_5-=0.01;
	
	page1Opacity1_5-=0.01;
	page2Opacity1_5-=0.01;
	page3Opacity1_5-=0.01;
	page4Opacity1_5-=0.01;
	
	page6Opacity1_5-=0.01;
	page7Opacity1_5-=0.01;
	page8Opacity1_5-=0.01;
	page9Opacity1_5-=0.01;
	page10Opacity1_5-=0.01;
}

function hidePage5Paragraphs5()
{
	bookChapter1BgAccess5=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg5Access5=document.getElementById("bookParagraphBg5");
	
	bookPage1BgAccess5=document.getElementById("bookPage1Bg");
	bookPage2BgAccess5=document.getElementById("bookPage2Bg");
	bookPage3BgAccess5=document.getElementById("bookPage3Bg");
	bookPage4BgAccess5=document.getElementById("bookPage4Bg");
	bookPage5BgAccess5=document.getElementById("bookPage5Bg");
	bookPage6BgAccess5=document.getElementById("bookPage6Bg");
	bookPage7BgAccess5=document.getElementById("bookPage7Bg");
	bookPage8BgAccess5=document.getElementById("bookPage8Bg");
	bookPage9BgAccess5=document.getElementById("bookPage9Bg");
	bookPage10BgAccess5=document.getElementById("bookPage10Bg");
	
	chapter1Access5=document.getElementById("chapter1");
	
	page1Access5=document.getElementById("page1");
	page2Access5=document.getElementById("page2");
	page3Access5=document.getElementById("page3");
	page4Access5=document.getElementById("page4");
	page5Access5=document.getElementById("page5");
	page6Access5=document.getElementById("page6");
	page7Access5=document.getElementById("page7");
	page8Access5=document.getElementById("page8");
	page9Access5=document.getElementById("page9");
	page10Access5=document.getElementById("page10");
	
	paragraph1Access5=document.getElementById("bookParagraph5-1");
	paragraph2Access5=document.getElementById("bookParagraph5-2");
	paragraph3Access5=document.getElementById("bookParagraph5-3");
	paragraph4Access5=document.getElementById("bookParagraph5-4");
	paragraph5Access5=document.getElementById("bookParagraph5-5");
	
	bookChapter1BgAccess5.style.display="block";
	bookChapter1BgAccess5.style.opacity=bookChapter1BgOpacity2_5;
	
	bookPage1BgAccess5.style.display="block";
	bookPage1BgAccess5.style.opacity=bookPage1BgOpacity2_5;
	
	bookPage2BgAccess5.style.display="block";
	bookPage2BgAccess5.style.opacity=bookPage2BgOpacity2_5;
	
	bookPage3BgAccess5.style.display="block";
	bookPage3BgAccess5.style.opacity=bookPage3BgOpacity2_5;
	
	bookPage4BgAccess5.style.display="block";
	bookPage4BgAccess5.style.opacity=bookPage4BgOpacity2_5;
	
	bookPage5BgAccess5.style.top=bookPage5BgTop2_5+"px";
	
	bookPage6BgAccess5.style.display="block";
	bookPage6BgAccess5.style.opacity=bookPage6BgOpacity2_5;
	
	bookPage7BgAccess5.style.display="block";
	bookPage7BgAccess5.style.opacity=bookPage7BgOpacity2_5;
	
	bookPage8BgAccess5.style.display="block";
	bookPage8BgAccess5.style.opacity=bookPage8BgOpacity2_5;
	
	bookPage9BgAccess5.style.display="block";
	bookPage9BgAccess5.style.opacity=bookPage9BgOpacity2_5;
	
	bookPage10BgAccess5.style.display="block";
	bookPage10BgAccess5.style.opacity=bookPage10BgOpacity2_5;
	
	bookParagraphBg5Access5.style.opacity=bookParagraphBg5Opacity2_5;
	
	chapter1Access5.style.display="block";
	chapter1Access5.style.opacity=chapter1Opacity2_5;
	
	page1Access5.style.display="block";
	page1Access5.style.opacity=page1Opacity2_5;
	
	page2Access5.style.display="block";
	page2Access5.style.opacity=page2Opacity2_5;
	
	page3Access5.style.display="block";
	page3Access5.style.opacity=page3Opacity2_5;
	
	page4Access5.style.display="block";
	page4Access5.style.opacity=page4Opacity2_5;
	
	page5Access5.style.top=page5Top2_5+"px";
	
	page6Access5.style.display="block";
	page6Access5.style.opacity=page6Opacity2_5;
	
	page7Access5.style.display="block";
	page7Access5.style.opacity=page7Opacity2_5;
	
	page8Access5.style.display="block";
	page8Access5.style.opacity=page8Opacity2_5;
	
	page9Access5.style.display="block";
	page9Access5.style.opacity=page9Opacity2_5;
	
	page10Access5.style.display="block";
	page10Access5.style.opacity=page10Opacity2_5;
	
	paragraph1Access5.style.opacity=paragraph1Opacity2_5;
	paragraph2Access5.style.opacity=paragraph2Opacity2_5;
	paragraph3Access5.style.opacity=paragraph3Opacity2_5;
	paragraph4Access5.style.opacity=paragraph4Opacity2_5;
	paragraph5Access5.style.opacity=paragraph5Opacity2_5;
	
	if(bookParagraphBg5Opacity2_5<=0)
	{
		bookPage5BgTop2_5+=0.5;
		
		bookParagraphBg5Opacity2_5=0;
		bookParagraphBg5Access5.style.display="none";
		
		page5Top2_5+=0.5;
		
		paragraph1Opacity2_5=0;
		paragraph2Opacity2_5=0;
		paragraph3Opacity2_5=0;
		paragraph4Opacity2_5=0;
		paragraph5Opacity2_5=0;
		
		paragraph1Access5.style.display="none";
		paragraph2Access5.style.display="none";
		paragraph3Access5.style.display="none";
		paragraph4Access5.style.display="none";
		paragraph5Access5.style.display="none";
		
		if(bookPage5BgTop2_5>=128)
		{
			bookChapter1BgOpacity2_5+=0.01;
			
			bookPage1BgOpacity2_5+=0.01;
			bookPage2BgOpacity2_5+=0.01;
			bookPage3BgOpacity2_5+=0.01;
			bookPage4BgOpacity2_5+=0.01;
			
			bookPage5BgTop2_5=128;
			
			bookPage6BgOpacity2_5+=0.01;
			bookPage7BgOpacity2_5+=0.01;
			bookPage8BgOpacity2_5+=0.01;
			bookPage9BgOpacity2_5+=0.01;
			bookPage10BgOpacity2_5+=0.01;
			
			chapter1Opacity2_5+=0.01;
			
			page1Opacity2_5+=0.01;
			page2Opacity2_5+=0.01;
			page3Opacity2_5+=0.01;
			page4Opacity2_5+=0.01;
			
			page5Top2_5=130;
			
			page6Opacity2_5+=0.01;
			page7Opacity2_5+=0.01;
			page8Opacity2_5+=0.01;
			page9Opacity2_5+=0.01;
			page10Opacity2_5+=0.01;
			
			if(bookPage1BgOpacity2_5>=1)
			{
				bookChapter1BgOpacity2_5=1;
				
				bookPage1BgOpacity2_5=1;
				bookPage2BgOpacity2_5=1;
				bookPage3BgOpacity2_5=1;
				bookPage4BgOpacity2_5=1;
				
				bookPage6BgOpacity2_5=1;
				bookPage7BgOpacity2_5=1;
				bookPage8BgOpacity2_5=1;
				bookPage9BgOpacity2_5=1;
				bookPage10BgOpacity2_5=1;
				
				chapter1Opacity2_5=1;
				
				page1Opacity2_5=1;
				page2Opacity2_5=1;
				page3Opacity2_5=1;
				page4Opacity2_5=1;
				
				page6Opacity2_5=1;
				page7Opacity2_5=1;
				page8Opacity2_5=1;
				page9Opacity2_5=1;
				page10Opacity2_5=1;
				
				isParagraphAnimated2_5=true;
				
				if(isParagraphAnimated2_5==true)
				{
					bookChapter1BgOpacity2_5=0;
				
					bookPage1BgOpacity2_5=0;
					bookPage2BgOpacity2_5=0;
					bookPage3BgOpacity2_5=0;
					bookPage4BgOpacity2_5=0;
					
					bookPage5BgTop2_5=-52;
					
					bookPage6BgOpacity2_5=0;
					bookPage7BgOpacity2_5=0;
					bookPage8BgOpacity2_5=0;
					bookPage9BgOpacity2_5=0;
					bookPage10BgOpacity2_5=0;
					
					bookParagraphBg5Opacity2_5=1;
					
					chapter1Opacity2_5=0;
					
					page1Opacity2_5=0;
					page2Opacity2_5=0;
					page3Opacity2_5=0;
					page4Opacity2_5=0;
					
					page5Top2_5=-50;
					
					page6Opacity2_5=0;
					page7Opacity2_5=0;
					page8Opacity2_5=0;
					page9Opacity2_5=0;
					page10Opacity2_5=0;
					
					paragraph1Opacity2_5=1;
					paragraph2Opacity2_5=1;
					paragraph3Opacity2_5=1;
					paragraph4Opacity2_5=1;
					paragraph5Opacity2_5=1;
		
				}
				
				window.clearInterval(paragraphAnimate2_5);
			}
		}
	}
	
	bookParagraphBg5Opacity2_5-=0.01;
	
	paragraph1Opacity2_5-=0.01;
	paragraph2Opacity2_5-=0.01;
	paragraph3Opacity2_5-=0.01;
	paragraph4Opacity2_5-=0.01;
	paragraph5Opacity2_5-=0.01;
}

window.addEventListener("load",bookSetup3_5,false);