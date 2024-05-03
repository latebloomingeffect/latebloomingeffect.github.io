/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess8;
var bookChapter1BgOpacity1_8=1;
var bookChapter1BgOpacity2_8=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess8;
var bookPage1BgOpacity1_8=1;
var bookPage1BgOpacity2_8=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess8;
var bookPage2BgOpacity1_8=1;
var bookPage2BgOpacity2_8=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess8;
var bookPage3BgOpacity1_8=1;
var bookPage3BgOpacity2_8=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess8;
var bookPage4BgOpacity1_8=1;
var bookPage4BgOpacity2_8=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess8;
var bookPage5BgOpacity1_8=1;
var bookPage5BgOpacity2_8=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess8;
var bookPage6BgOpacity1_8=1;
var bookPage6BgOpacity2_8=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess8;
var bookPage7BgOpacity1_8=1;
var bookPage7BgOpacity2_8=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess8;
var bookPage8BgTop1_8=224;
var bookPage8BgTop2_8=-52;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess8;
var bookPage9BgOpacity1_8=1;
var bookPage9BgOpacity2_8=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess8;
var bookPage10BgOpacity1_8=1;
var bookPage10BgOpacity2_8=0;

//Variables required to manipulate the Book Paragraph Bg 5 element
var bookParagraphBg8Access8;
var bookParagraphBg8Opacity1_8=0;
var bookParagraphBg8Opacity2_8=1;

//Variables required to manipulate the chapter 1 element
var chapter1Access8;
var chapter1Opacity1_8=1;
var chapter1Opacity2_8=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_8=false;
var isParagraphAnimated2_8=false;

//Variables required to manipulate the Page 1 element
var page1Access8;
var page1Opacity1_8=1;
var page1Opacity2_8=0;

//Variables required to manipulate the Page 2 element
var page2Access8;
var page2Opacity1_8=1;
var page2Opacity2_8=0;

//Variables required to manipulate the Page 3 element
var page3Access8;
var page3Opacity1_8=1;
var page3Opacity2_8=0;

//Variables required to manipulate the Page 4 element
var page4Access8;
var page4Opacity1_8=1;
var page4Opacity2_8=0;

//Variables required to manipulate the Page 5 element
var page5Access8;
var page5Opacity1_8=1;
var page5Opacity2_8=0;

//Variables required to manipulate the Page 6 element
var page6Access8;
var page6Opacity1_8=1;
var page6Opacity2_8=0;

//Variables required to manipulate the Page 7 element
var page7Access8;
var page7Opacity1_8=1;
var page7Opacity2_8=0;

//Variables required to manipulate the Page 8 element
var page8Access8;
var page8Top1_8=226;
var page8Top2_8=-50;

//Variables required to manipulate the Page 9 element
var page9Access8;
var page9Opacity1_8=1;
var page9Opacity2_8=0;

//Variables required to manipulate the Page 10 element
var page10Access8;
var page10Opacity1_8=1;
var page10Opacity2_8=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access8;
var paragraph1Opacity1_8=0;
var paragraph1Opacity2_8=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access8;
var paragraph2Opacity1_8=0;
var paragraph2Opacity2_8=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access8;
var paragraph3Opacity1_8=0;
var paragraph3Opacity2_8=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access8;
var paragraph4Opacity1_8=0;
var paragraph4Opacity2_8=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access8;
var paragraph5Opacity1_8=0;
var paragraph5Opacity2_8=1;

var paragraphAnimate1_8;
var paragraphAnimate2_8;

function bookSetup3_8()
{
	bookParagraphBg8Access8=document.getElementById("bookParagraphBg8");
	bookParagraphBg8Access8.addEventListener("click",animateParagraphs2_8,false);
	
	page5Access5=document.getElementById("page8");
	page5Access5.addEventListener("click",animateParagraphs1_8,false);
}

function animateParagraphs1_8()
{
	paragraphAnimate1_8=window.setInterval(showPage8Paragraphs8,15);
}

function animateParagraphs2_8()
{
	paragraphAnimate2_8=window.setInterval(hidePage8Paragraphs8,15);
}

function showPage8Paragraphs8()
{
	bookChapter1BgAccess8=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess8=document.getElementById("bookPage1Bg");
	bookPage2BgAccess8=document.getElementById("bookPage2Bg");
	bookPage3BgAccess8=document.getElementById("bookPage3Bg");
	bookPage4BgAccess8=document.getElementById("bookPage4Bg");
	bookPage5BgAccess8=document.getElementById("bookPage5Bg");
	bookPage6BgAccess8=document.getElementById("bookPage6Bg");
	bookPage7BgAccess8=document.getElementById("bookPage7Bg");
	bookPage8BgAccess8=document.getElementById("bookPage8Bg");
	bookPage9BgAccess8=document.getElementById("bookPage9Bg");
	bookPage10BgAccess8=document.getElementById("bookPage10Bg");
	
	bookParagraphBg8Access8=document.getElementById("bookParagraphBg8");
	
	chapter1Access8=document.getElementById("chapter1");
	
	page1Access8=document.getElementById("page1");
	page2Access8=document.getElementById("page2");
	page3Access8=document.getElementById("page3");
	page4Access8=document.getElementById("page4");
	page5Access8=document.getElementById("page5");
	page6Access8=document.getElementById("page6");
	page7Access8=document.getElementById("page7");
	page8Access8=document.getElementById("page8");
	page9Access8=document.getElementById("page9");
	page10Access8=document.getElementById("page10");
	
	paragraph1Access8=document.getElementById("bookParagraph8-1");
	paragraph2Access8=document.getElementById("bookParagraph8-2");
	paragraph3Access8=document.getElementById("bookParagraph8-3");
	paragraph4Access8=document.getElementById("bookParagraph8-4");
	paragraph5Access8=document.getElementById("bookParagraph8-5");
	
	bookChapter1BgAccess8.style.opacity=bookChapter1BgOpacity1_8;
	
	bookPage1BgAccess8.style.opacity=bookPage1BgOpacity1_8;
	bookPage2BgAccess8.style.opacity=bookPage2BgOpacity1_8;
	bookPage3BgAccess8.style.opacity=bookPage3BgOpacity1_8;
	bookPage4BgAccess8.style.opacity=bookPage4BgOpacity1_8;
	bookPage5BgAccess8.style.opacity=bookPage5BgOpacity1_8;
	bookPage6BgAccess8.style.opacity=bookPage6BgOpacity1_8;
	bookPage7BgAccess8.style.opacity=bookPage7BgOpacity1_8;
	
	bookPage8BgAccess8.style.top=bookPage8BgTop1_8+"px";
	
	bookPage9BgAccess8.style.opacity=bookPage9BgOpacity1_8;
	bookPage10BgAccess8.style.opacity=bookPage10BgOpacity1_8;
	
	bookParagraphBg8Access8.style.display="block";
	bookParagraphBg8Access8.style.opacity=bookParagraphBg8Opacity1_8;
	
	chapter1Access8.style.opacity=chapter1Opacity1_8;
	
	page1Access8.style.opacity=page1Opacity1_8;
	page2Access8.style.opacity=page2Opacity1_8;
	page3Access8.style.opacity=page3Opacity1_8;
	page4Access8.style.opacity=page4Opacity1_8;
	page5Access8.style.opacity=page5Opacity1_8;
	page6Access8.style.opacity=page6Opacity1_8;
	page7Access8.style.opacity=page7Opacity1_8;
	
	page8Access8.style.top=page8Top1_8+"px";
	
	page9Access8.style.opacity=page9Opacity1_8;
	page10Access8.style.opacity=page10Opacity1_8;
	
	paragraph1Access8.style.display="block";
	paragraph1Access8.style.opacity=paragraph1Opacity1_8;
	
	paragraph2Access8.style.display="block";
	paragraph2Access8.style.opacity=paragraph2Opacity1_8;
	
	paragraph3Access8.style.display="block";
	paragraph3Access8.style.opacity=paragraph3Opacity1_8;
	
	paragraph4Access8.style.display="block";
	paragraph4Access8.style.opacity=paragraph4Opacity1_8;
	
	paragraph5Access8.style.display="block";
	paragraph5Access8.style.opacity=paragraph5Opacity1_8;
	
	if(bookChapter1BgOpacity1_8<=0)
	{
		bookChapter1BgOpacity1_8=0;
		bookChapter1BgAccess8.style.display="none";
		
		bookPage1BgOpacity1_8=0;
		bookPage2BgOpacity1_8=0;
		bookPage3BgOpacity1_8=0;
		bookPage4BgOpacity1_8=0;
		bookPage5BgOpacity1_8=0;
		bookPage6BgOpacity1_8=0;
		bookPage7BgOpacity1_8=0;
		
		bookPage9BgOpacity1_8=0;
		bookPage10BgOpacity1_8=0;
		
		bookPage1BgAccess8.style.display="none";
		bookPage2BgAccess8.style.display="none";
		bookPage3BgAccess8.style.display="none";
		bookPage4BgAccess8.style.display="none";
		bookPage5BgAccess8.style.display="none";
		bookPage6BgAccess8.style.display="none";
		bookPage7BgAccess8.style.display="none";
		
		bookPage9BgAccess8.style.display="none";
		bookPage10BgAccess8.style.display="none";
		
		bookPage8BgTop1_8-=0.5;
		
		chapter1Opacity1_8=0;
		chapter1Access8.style.display="none";
		
		page1Opacity1_8=0;
		page2Opacity1_8=0;
		page3Opacity1_8=0;
		page4Opacity1_8=0;
		page5Opacity1_8=0;
		page6Opacity1_8=0;
		page7Opacity1_8=0;
		
		page9Opacity1_8=0;
		page10Opacity1_8=0;
		
		page1Access8.style.display="none";
		page2Access8.style.display="none";
		page3Access8.style.display="none";
		page4Access8.style.display="none";
		page5Access8.style.display="none";
		page6Access8.style.display="none";
		page7Access8.style.display="none";
		
		page9Access8.style.display="none";
		page10Access8.style.display="none";
		
		page8Top1_8-=0.5;
		
		if(bookPage8BgTop1_8<=-52)
		{
			bookPage8BgTop1_8=-52;
			
			bookParagraphBg8Opacity1_8+=0.01;
			
			page8Top1_8=-50;
			
			paragraph1Opacity1_8+=0.01;
			paragraph2Opacity1_8+=0.01;
			paragraph3Opacity1_8+=0.01;
			paragraph4Opacity1_8+=0.01;
			paragraph5Opacity1_8+=0.01;
			
			if(bookParagraphBg8Opacity1_8>=1)
			{
				bookParagraphBg8Opacity1_8=1;
				
				paragraph1Opacity1_8=1;
				paragraph2Opacity1_8=1;
				paragraph3Opacity1_8=1;
				paragraph4Opacity1_8=1;
				paragraph5Opacity1_8=1;
				
				isParagraphAnimated1_8=true;
				
				if(isParagraphAnimated1_8==true)
				{
					bookChapter1BgOpacity1_8=1;
		
					bookPage1BgOpacity1_8=1;
					bookPage2BgOpacity1_8=1;
					bookPage3BgOpacity1_8=1;
					bookPage4BgOpacity1_8=1;
					bookPage5BgOpacity1_8=1;
					bookPage6BgOpacity1_8=1;
					bookPage7BgOpacity1_8=1;
					
					bookPage8BgTop1_8=224;
					
					bookPage9BgOpacity1_8=1;
					bookPage10BgOpacity1_8=1;
					
					bookParagraphBg8Opacity1_8=0;
					
					chapter1Opacity1_8=1;
		
					page1Opacity1_8=1;
					page2Opacity1_8=1;
					page3Opacity1_8=1;
					page4Opacity1_8=1;
					page5Opacity1_8=1;
					page6Opacity1_8=1;
					page7Opacity1_8=1;
					
					page8Top1_8=226;
					
					page9Opacity1_8=1;
					page10Opacity1_8=1;
					
					paragraph1Opacity1_8=0;
					paragraph2Opacity1_8=0;
					paragraph3Opacity1_8=0;
					paragraph4Opacity1_8=0;
					paragraph5Opacity1_8=0;
				}
				window.clearInterval(paragraphAnimate1_8);
			}
		}
	}
	
	bookChapter1BgOpacity1_8-=0.01;
	
	bookPage1BgOpacity1_8-=0.01;
	bookPage2BgOpacity1_8-=0.01;
	bookPage3BgOpacity1_8-=0.01;
	bookPage4BgOpacity1_8-=0.01;
	bookPage5BgOpacity1_8-=0.01;
	bookPage6BgOpacity1_8-=0.01;
	bookPage7BgOpacity1_8-=0.01;
	
	bookPage9BgOpacity1_8-=0.01;
	bookPage10BgOpacity1_8-=0.01;
	
	chapter1Opacity1_8-=0.01;
	
	page1Opacity1_8-=0.01;
	page2Opacity1_8-=0.01;
	page3Opacity1_8-=0.01;
	page4Opacity1_8-=0.01;
	page5Opacity1_8-=0.01;
	page6Opacity1_8-=0.01;
	page7Opacity1_8-=0.01;
	
	page9Opacity1_8-=0.01;
	page10Opacity1_8-=0.01;
}

function hidePage8Paragraphs8()
{
	bookChapter1BgAccess8=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg8Access8=document.getElementById("bookParagraphBg8");
	
	bookPage1BgAccess8=document.getElementById("bookPage1Bg");
	bookPage2BgAccess8=document.getElementById("bookPage2Bg");
	bookPage3BgAccess8=document.getElementById("bookPage3Bg");
	bookPage4BgAccess8=document.getElementById("bookPage4Bg");
	bookPage5BgAccess8=document.getElementById("bookPage5Bg");
	bookPage6BgAccess8=document.getElementById("bookPage6Bg");
	bookPage7BgAccess8=document.getElementById("bookPage7Bg");
	bookPage8BgAccess8=document.getElementById("bookPage8Bg");
	bookPage9BgAccess8=document.getElementById("bookPage9Bg");
	bookPage10BgAccess8=document.getElementById("bookPage10Bg");
	
	chapter1Access8=document.getElementById("chapter1");
	
	page1Access8=document.getElementById("page1");
	page2Access8=document.getElementById("page2");
	page3Access8=document.getElementById("page3");
	page4Access8=document.getElementById("page4");
	page5Access8=document.getElementById("page5");
	page6Access8=document.getElementById("page6");
	page7Access8=document.getElementById("page7");
	page8Access5=document.getElementById("page8");
	page9Access8=document.getElementById("page9");
	page10Access8=document.getElementById("page10");
	
	paragraph1Access8=document.getElementById("bookParagraph8-1");
	paragraph2Access8=document.getElementById("bookParagraph8-2");
	paragraph3Access8=document.getElementById("bookParagraph8-3");
	paragraph4Access8=document.getElementById("bookParagraph8-4");
	paragraph5Access8=document.getElementById("bookParagraph8-5");
	
	bookChapter1BgAccess8.style.display="block";
	bookChapter1BgAccess8.style.opacity=bookChapter1BgOpacity2_8;
	
	bookPage1BgAccess8.style.display="block";
	bookPage1BgAccess8.style.opacity=bookPage1BgOpacity2_8;
	
	bookPage2BgAccess8.style.display="block";
	bookPage2BgAccess8.style.opacity=bookPage2BgOpacity2_8;
	
	bookPage3BgAccess8.style.display="block";
	bookPage3BgAccess8.style.opacity=bookPage3BgOpacity2_8;
	
	bookPage4BgAccess8.style.display="block";
	bookPage4BgAccess8.style.opacity=bookPage4BgOpacity2_8;
	
	bookPage5BgAccess8.style.display="block";
	bookPage5BgAccess8.style.opacity=bookPage5BgOpacity2_8;
	
	bookPage6BgAccess8.style.display="block";
	bookPage6BgAccess8.style.opacity=bookPage6BgOpacity2_8;
	
	bookPage7BgAccess8.style.display="block";
	bookPage7BgAccess8.style.opacity=bookPage7BgOpacity2_8;
	
	bookPage8BgAccess8.style.top=bookPage8BgTop2_8+"px";
	
	bookPage9BgAccess8.style.display="block";
	bookPage9BgAccess8.style.opacity=bookPage9BgOpacity2_8;
	
	bookPage10BgAccess8.style.display="block";
	bookPage10BgAccess8.style.opacity=bookPage10BgOpacity2_8;
	
	bookParagraphBg8Access8.style.opacity=bookParagraphBg8Opacity2_8;
	
	chapter1Access8.style.display="block";
	chapter1Access8.style.opacity=chapter1Opacity2_8;
	
	page1Access8.style.display="block";
	page1Access8.style.opacity=page1Opacity2_8;
	
	page2Access8.style.display="block";
	page2Access8.style.opacity=page2Opacity2_8;
	
	page3Access8.style.display="block";
	page3Access8.style.opacity=page3Opacity2_8;
	
	page4Access8.style.display="block";
	page4Access8.style.opacity=page4Opacity2_8;
	
	page5Access8.style.display="block";
	page5Access8.style.opacity=page5Opacity2_8;
	
	page6Access8.style.display="block";
	page6Access8.style.opacity=page6Opacity2_8;
	
	page7Access8.style.display="block";
	page7Access8.style.opacity=page7Opacity2_8;
	
	page8Access8.style.top=page8Top2_8+"px";
	
	page9Access8.style.display="block";
	page9Access8.style.opacity=page9Opacity2_8;
	
	page10Access8.style.display="block";
	page10Access8.style.opacity=page10Opacity2_8;
	
	paragraph1Access8.style.opacity=paragraph1Opacity2_8;
	paragraph2Access8.style.opacity=paragraph2Opacity2_8;
	paragraph3Access8.style.opacity=paragraph3Opacity2_8;
	paragraph4Access8.style.opacity=paragraph4Opacity2_8;
	paragraph5Access8.style.opacity=paragraph5Opacity2_8;
	
	if(bookParagraphBg8Opacity2_8<=0)
	{
		bookPage8BgTop2_8+=0.5;
		
		bookParagraphBg8Opacity2_8=0;
		bookParagraphBg8Access8.style.display="none";
		
		page8Top2_8+=0.5;
		
		paragraph1Opacity2_8=0;
		paragraph2Opacity2_8=0;
		paragraph3Opacity2_8=0;
		paragraph4Opacity2_8=0;
		paragraph5Opacity2_8=0;
		
		paragraph1Access8.style.display="none";
		paragraph2Access8.style.display="none";
		paragraph3Access8.style.display="none";
		paragraph4Access8.style.display="none";
		paragraph5Access8.style.display="none";
		
		if(bookPage8BgTop2_8>=224)
		{
			bookChapter1BgOpacity2_8+=0.01;
			
			bookPage1BgOpacity2_8+=0.01;
			bookPage2BgOpacity2_8+=0.01;
			bookPage3BgOpacity2_8+=0.01;
			bookPage4BgOpacity2_8+=0.01;
			bookPage5BgOpacity2_8+=0.01;
			bookPage6BgOpacity2_8+=0.01;
			bookPage7BgOpacity2_8+=0.01;
			
			bookPage8BgTop2_8=224;
			
			bookPage9BgOpacity2_8+=0.01;
			bookPage10BgOpacity2_8+=0.01;
			
			chapter1Opacity2_8+=0.01;
			
			page1Opacity2_8+=0.01;
			page2Opacity2_8+=0.01;
			page3Opacity2_8+=0.01;
			page4Opacity2_8+=0.01;
			page5Opacity2_8+=0.01;
			page6Opacity2_8+=0.01;
			page7Opacity2_8+=0.01;
			
			page8Top2_8=226;
			
			
			page9Opacity2_8+=0.01;
			page10Opacity2_8+=0.01;
			
			if(bookPage1BgOpacity2_8>=1)
			{
				bookChapter1BgOpacity2_8=1;
				
				bookPage1BgOpacity2_8=1;
				bookPage2BgOpacity2_8=1;
				bookPage3BgOpacity2_8=1;
				bookPage4BgOpacity2_8=1;
				bookPage5BgOpacity2_8=1;
				bookPage6BgOpacity2_8=1;
				bookPage7BgOpacity2_8=1;
				
				bookPage9BgOpacity2_8=1;
				bookPage10BgOpacity2_8=1;
				
				chapter1Opacity2_8=1;
				
				page1Opacity2_8=1;
				page2Opacity2_8=1;
				page3Opacity2_8=1;
				page4Opacity2_8=1;
				page5Opacity2_8=1;
				page6Opacity2_8=1;
				page7Opacity2_8=1;
				
				page9Opacity2_8=1;
				page10Opacity2_8=1;
				
				isParagraphAnimated2_8=true;
				
				if(isParagraphAnimated2_8==true)
				{
					bookChapter1BgOpacity2_8=0;
				
					bookPage1BgOpacity2_8=0;
					bookPage2BgOpacity2_8=0;
					bookPage3BgOpacity2_8=0;
					bookPage4BgOpacity2_8=0;
					bookPage5BgOpacity2_8=0;
					bookPage6BgOpacity2_8=0;
					bookPage7BgOpacity2_8=0;
					
					bookPage8BgTop2_8=-52;
					
					bookPage9BgOpacity2_8=0;
					bookPage10BgOpacity2_8=0;
					
					bookParagraphBg8Opacity2_8=1;
					
					chapter1Opacity2_8=0;
					
					page1Opacity2_8=0;
					page2Opacity2_8=0;
					page3Opacity2_8=0;
					page4Opacity2_8=0;
					page5Opacity2_8=0;
					page6Opacity2_8=0;
					page7Opacity2_8=0;
					
					page8Top2_8=-50;
					
					
					page9Opacity2_8=0;
					page10Opacity2_8=0;
					
					paragraph1Opacity2_8=1;
					paragraph2Opacity2_8=1;
					paragraph3Opacity2_8=1;
					paragraph4Opacity2_8=1;
					paragraph5Opacity2_8=1;
		
				}
				
				window.clearInterval(paragraphAnimate2_8);
			}
		}
	}
	
	bookParagraphBg8Opacity2_8-=0.01;
	
	paragraph1Opacity2_8-=0.01;
	paragraph2Opacity2_8-=0.01;
	paragraph3Opacity2_8-=0.01;
	paragraph4Opacity2_8-=0.01;
	paragraph5Opacity2_8-=0.01;
}

window.addEventListener("load",bookSetup3_8,false);