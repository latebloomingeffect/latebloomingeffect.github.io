/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess7;
var bookChapter1BgOpacity1_7=1;
var bookChapter1BgOpacity2_7=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess7;
var bookPage1BgOpacity1_7=1;
var bookPage1BgOpacity2_7=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess7;
var bookPage2BgOpacity1_7=1;
var bookPage2BgOpacity2_7=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess7;
var bookPage3BgOpacity1_7=1;
var bookPage3BgOpacity2_7=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess7;
var bookPage4BgOpacity1_7=1;
var bookPage4BgOpacity2_7=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess7;
var bookPage5BgOpacity1_7=1;
var bookPage5BgOpacity2_7=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess7;
var bookPage6BgOpacity1_7=1;
var bookPage6BgOpacity2_7=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess7;
var bookPage7BgTop1_7=192;
var bookPage7BgTop2_7=-52;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess7;
var bookPage8BgOpacity1_7=1;
var bookPage8BgOpacity2_7=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess7;
var bookPage9BgOpacity1_7=1;
var bookPage9BgOpacity2_7=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess7;
var bookPage10BgOpacity1_7=1;
var bookPage10BgOpacity2_7=0;

//Variables required to manipulate the Book Paragraph Bg 5 element
var bookParagraphBg7Access7;
var bookParagraphBg7Opacity1_7=0;
var bookParagraphBg7Opacity2_7=1;

//Variables required to manipulate the chapter 1 element
var chapter1Access7;
var chapter1Opacity1_7=1;
var chapter1Opacity2_7=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_7=false;
var isParagraphAnimated2_7=false;

//Variables required to manipulate the Page 1 element
var page1Access7;
var page1Opacity1_7=1;
var page1Opacity2_7=0;

//Variables required to manipulate the Page 2 element
var page2Access7;
var page2Opacity1_7=1;
var page2Opacity2_7=0;

//Variables required to manipulate the Page 3 element
var page3Access7;
var page3Opacity1_7=1;
var page3Opacity2_7=0;

//Variables required to manipulate the Page 4 element
var page4Access7;
var page4Opacity1_7=1;
var page4Opacity2_7=0;

//Variables required to manipulate the Page 5 element
var page5Access7;
var page5Opacity1_7=1;
var page5Opacity2_7=0;

//Variables required to manipulate the Page 6 element
var page6Access7;
var page6Opacity1_7=1;
var page6Opacity2_7=0;

//Variables required to manipulate the Page 7 element
var page7Access7;
var page7Top1_7=194;
var page7Top2_7=-50;

//Variables required to manipulate the Page 8 element
var page8Access7;
var page8Opacity1_7=1;
var page8Opacity2_7=0;

//Variables required to manipulate the Page 9 element
var page9Access7;
var page9Opacity1_7=1;
var page9Opacity2_7=0;

//Variables required to manipulate the Page 10 element
var page10Access7;
var page10Opacity1_7=1;
var page10Opacity2_7=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access7;
var paragraph1Opacity1_7=0;
var paragraph1Opacity2_7=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access7;
var paragraph2Opacity1_7=0;
var paragraph2Opacity2_7=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access7;
var paragraph3Opacity1_7=0;
var paragraph3Opacity2_7=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access7;
var paragraph4Opacity1_7=0;
var paragraph4Opacity2_7=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access7;
var paragraph5Opacity1_7=0;
var paragraph5Opacity2_7=1;

var paragraphAnimate1_7;
var paragraphAnimate2_7;

function bookSetup3_7()
{
	bookParagraphBg7Access7=document.getElementById("bookParagraphBg7");
	bookParagraphBg7Access7.addEventListener("click",animateParagraphs2_7,false);
	
	page5Access7=document.getElementById("page7");
	page5Access7.addEventListener("click",animateParagraphs1_7,false);
}

function animateParagraphs1_7()
{
	paragraphAnimate1_7=window.setInterval(showPage7Paragraphs7,15);
}

function animateParagraphs2_7()
{
	paragraphAnimate2_7=window.setInterval(hidePage7Paragraphs7,15);
}

function showPage7Paragraphs7()
{
	bookChapter1BgAccess7=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess7=document.getElementById("bookPage1Bg");
	bookPage2BgAccess7=document.getElementById("bookPage2Bg");
	bookPage3BgAccess7=document.getElementById("bookPage3Bg");
	bookPage4BgAccess7=document.getElementById("bookPage4Bg");
	bookPage5BgAccess7=document.getElementById("bookPage5Bg");
	bookPage6BgAccess7=document.getElementById("bookPage6Bg");
	bookPage7BgAccess7=document.getElementById("bookPage7Bg");
	bookPage8BgAccess7=document.getElementById("bookPage8Bg");
	bookPage9BgAccess7=document.getElementById("bookPage9Bg");
	bookPage10BgAccess7=document.getElementById("bookPage10Bg");
	
	bookParagraphBg7Access7=document.getElementById("bookParagraphBg7");
	
	chapter1Access7=document.getElementById("chapter1");
	
	page1Access7=document.getElementById("page1");
	page2Access7=document.getElementById("page2");
	page3Access7=document.getElementById("page3");
	page4Access7=document.getElementById("page4");
	page5Access7=document.getElementById("page5");
	page6Access7=document.getElementById("page6");
	page7Access7=document.getElementById("page7");
	page8Access7=document.getElementById("page8");
	page9Access7=document.getElementById("page9");
	page10Access7=document.getElementById("page10");
	
	paragraph1Access7=document.getElementById("bookParagraph7-1");
	paragraph2Access7=document.getElementById("bookParagraph7-2");
	paragraph3Access7=document.getElementById("bookParagraph7-3");
	paragraph4Access7=document.getElementById("bookParagraph7-4");
	paragraph5Access7=document.getElementById("bookParagraph7-5");
	
	bookChapter1BgAccess7.style.opacity=bookChapter1BgOpacity1_7;
	
	bookPage1BgAccess7.style.opacity=bookPage1BgOpacity1_7;
	bookPage2BgAccess7.style.opacity=bookPage2BgOpacity1_7;
	bookPage3BgAccess7.style.opacity=bookPage3BgOpacity1_7;
	bookPage4BgAccess7.style.opacity=bookPage4BgOpacity1_7;
	bookPage5BgAccess7.style.opacity=bookPage5BgOpacity1_7;
	bookPage6BgAccess7.style.opacity=bookPage6BgOpacity1_7;
	
	bookPage7BgAccess7.style.top=bookPage7BgTop1_7+"px";
	
	bookPage8BgAccess7.style.opacity=bookPage8BgOpacity1_7;
	bookPage9BgAccess7.style.opacity=bookPage9BgOpacity1_7;
	bookPage10BgAccess7.style.opacity=bookPage10BgOpacity1_7;
	
	bookParagraphBg7Access7.style.display="block";
	bookParagraphBg7Access7.style.opacity=bookParagraphBg7Opacity1_7;
	
	chapter1Access7.style.opacity=chapter1Opacity1_7;
	
	page1Access7.style.opacity=page1Opacity1_7;
	page2Access7.style.opacity=page2Opacity1_7;
	page3Access7.style.opacity=page3Opacity1_7;
	page4Access7.style.opacity=page4Opacity1_7;
	page5Access7.style.opacity=page5Opacity1_7;
	page6Access7.style.opacity=page6Opacity1_7;
	
	page7Access7.style.top=page7Top1_7+"px";
	
	page8Access7.style.opacity=page8Opacity1_7;
	page9Access7.style.opacity=page9Opacity1_7;
	page10Access7.style.opacity=page10Opacity1_7;
	
	paragraph1Access7.style.display="block";
	paragraph1Access7.style.opacity=paragraph1Opacity1_7;
	
	paragraph2Access7.style.display="block";
	paragraph2Access7.style.opacity=paragraph2Opacity1_7;
	
	paragraph3Access7.style.display="block";
	paragraph3Access7.style.opacity=paragraph3Opacity1_7;
	
	paragraph4Access7.style.display="block";
	paragraph4Access7.style.opacity=paragraph4Opacity1_7;
	
	paragraph5Access7.style.display="block";
	paragraph5Access7.style.opacity=paragraph5Opacity1_7;
	
	if(bookChapter1BgOpacity1_7<=0)
	{
		bookChapter1BgOpacity1_7=0;
		bookChapter1BgAccess7.style.display="none";
		
		bookPage1BgOpacity1_7=0;
		bookPage2BgOpacity1_7=0;
		bookPage3BgOpacity1_7=0;
		bookPage4BgOpacity1_7=0;
		bookPage5BgOpacity1_7=0;
		bookPage6BgOpacity1_7=0;
		
		bookPage8BgOpacity1_7=0;
		bookPage9BgOpacity1_7=0;
		bookPage10BgOpacity1_7=0;
		
		bookPage1BgAccess7.style.display="none";
		bookPage2BgAccess7.style.display="none";
		bookPage3BgAccess7.style.display="none";
		bookPage4BgAccess7.style.display="none";
		bookPage5BgAccess7.style.display="none";
		bookPage6BgAccess7.style.display="none";
		
		bookPage8BgAccess7.style.display="none";
		bookPage9BgAccess7.style.display="none";
		bookPage10BgAccess7.style.display="none";
		
		bookPage7BgTop1_7-=0.5;
		
		chapter1Opacity1_7=0;
		chapter1Access7.style.display="none";
		
		page1Opacity1_7=0;
		page2Opacity1_7=0;
		page3Opacity1_7=0;
		page4Opacity1_7=0;
		page5Opacity1_7=0;
		page6Opacity1_7=0;
		
		page8Opacity1_7=0;
		page9Opacity1_7=0;
		page10Opacity1_7=0;
		
		page1Access7.style.display="none";
		page2Access7.style.display="none";
		page3Access7.style.display="none";
		page4Access7.style.display="none";
		page5Access7.style.display="none";
		page6Access7.style.display="none";
		
		page8Access7.style.display="none";
		page9Access7.style.display="none";
		page10Access7.style.display="none";
		
		page7Top1_7-=0.5;
		
		if(bookPage7BgTop1_7<=-52)
		{
			bookPage7BgTop1_7=-52;
			
			bookParagraphBg7Opacity1_7+=0.01;
			
			page7Top1_7=-50;
			
			paragraph1Opacity1_7+=0.01;
			paragraph2Opacity1_7+=0.01;
			paragraph3Opacity1_7+=0.01;
			paragraph4Opacity1_7+=0.01;
			paragraph5Opacity1_7+=0.01;
			
			if(bookParagraphBg7Opacity1_7>=1)
			{
				bookParagraphBg7Opacity1_7=1;
				
				paragraph1Opacity1_7=1;
				paragraph2Opacity1_7=1;
				paragraph3Opacity1_7=1;
				paragraph4Opacity1_7=1;
				paragraph5Opacity1_7=1;
				
				isParagraphAnimated1_7=true;
				
				if(isParagraphAnimated1_7==true)
				{
					bookChapter1BgOpacity1_7=1;
		
					bookPage1BgOpacity1_7=1;
					bookPage2BgOpacity1_7=1;
					bookPage3BgOpacity1_7=1;
					bookPage4BgOpacity1_7=1;
					bookPage5BgOpacity1_7=1;
					bookPage6BgOpacity1_7=1;
					
					bookPage7BgTop1_7=192;
					
					bookPage8BgOpacity1_7=1;
					bookPage9BgOpacity1_7=1;
					bookPage10BgOpacity1_7=1;
					
					bookParagraphBg7Opacity1_7=0;
					
					chapter1Opacity1_7=1;
		
					page1Opacity1_7=1;
					page2Opacity1_7=1;
					page3Opacity1_7=1;
					page4Opacity1_7=1;
					page5Opacity1_7=1;
					page6Opacity1_7=1;
					
					page7Top1_7=194;
					
					page8Opacity1_7=1;
					page9Opacity1_7=1;
					page10Opacity1_5=1;
					
					paragraph1Opacity1_7=0;
					paragraph2Opacity1_7=0;
					paragraph3Opacity1_7=0;
					paragraph4Opacity1_7=0;
					paragraph5Opacity1_7=0;
				}
				window.clearInterval(paragraphAnimate1_7);
			}
		}
	}
	
	bookChapter1BgOpacity1_7-=0.01;
	
	bookPage1BgOpacity1_7-=0.01;
	bookPage2BgOpacity1_7-=0.01;
	bookPage3BgOpacity1_7-=0.01;
	bookPage4BgOpacity1_7-=0.01;
	bookPage5BgOpacity1_7-=0.01;
	bookPage6BgOpacity1_7-=0.01;
	
	bookPage8BgOpacity1_7-=0.01;
	bookPage9BgOpacity1_7-=0.01;
	bookPage10BgOpacity1_7-=0.01;
	
	chapter1Opacity1_7-=0.01;
	
	page1Opacity1_7-=0.01;
	page2Opacity1_7-=0.01;
	page3Opacity1_7-=0.01;
	page4Opacity1_7-=0.01;
	page5Opacity1_7-=0.01;
	page6Opacity1_7-=0.01;
	
	page8Opacity1_7-=0.01;
	page9Opacity1_7-=0.01;
	page10Opacity1_7-=0.01;
}

function hidePage7Paragraphs7()
{
	bookChapter1BgAccess7=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg7Access7=document.getElementById("bookParagraphBg7");
	
	bookPage1BgAccess7=document.getElementById("bookPage1Bg");
	bookPage2BgAccess7=document.getElementById("bookPage2Bg");
	bookPage3BgAccess7=document.getElementById("bookPage3Bg");
	bookPage4BgAccess7=document.getElementById("bookPage4Bg");
	bookPage5BgAccess7=document.getElementById("bookPage5Bg");
	bookPage6BgAccess7=document.getElementById("bookPage6Bg");
	bookPage7BgAccess7=document.getElementById("bookPage7Bg");
	bookPage8BgAccess7=document.getElementById("bookPage8Bg");
	bookPage9BgAccess7=document.getElementById("bookPage9Bg");
	bookPage10BgAccess7=document.getElementById("bookPage10Bg");
	
	chapter1Access7=document.getElementById("chapter1");
	
	page1Access7=document.getElementById("page1");
	page2Access7=document.getElementById("page2");
	page3Access7=document.getElementById("page3");
	page4Access7=document.getElementById("page4");
	page5Access7=document.getElementById("page5");
	page6Access7=document.getElementById("page6");
	page7Access7=document.getElementById("page7");
	page8Access7=document.getElementById("page8");
	page9Access7=document.getElementById("page9");
	page10Access7=document.getElementById("page10");
	
	paragraph1Access7=document.getElementById("bookParagraph7-1");
	paragraph2Access7=document.getElementById("bookParagraph7-2");
	paragraph3Access7=document.getElementById("bookParagraph7-3");
	paragraph4Access7=document.getElementById("bookParagraph7-4");
	paragraph5Access7=document.getElementById("bookParagraph7-5");
	
	bookChapter1BgAccess7.style.display="block";
	bookChapter1BgAccess7.style.opacity=bookChapter1BgOpacity2_7;
	
	bookPage1BgAccess7.style.display="block";
	bookPage1BgAccess7.style.opacity=bookPage1BgOpacity2_7;
	
	bookPage2BgAccess7.style.display="block";
	bookPage2BgAccess7.style.opacity=bookPage2BgOpacity2_7;
	
	bookPage3BgAccess7.style.display="block";
	bookPage3BgAccess7.style.opacity=bookPage3BgOpacity2_7;
	
	bookPage4BgAccess7.style.display="block";
	bookPage4BgAccess7.style.opacity=bookPage4BgOpacity2_7;
	
	bookPage5BgAccess7.style.display="block";
	bookPage5BgAccess7.style.opacity=bookPage5BgOpacity2_7;
	
	bookPage6BgAccess7.style.display="block";
	bookPage6BgAccess7.style.opacity=bookPage6BgOpacity2_7;
	
	bookPage7BgAccess7.style.top=bookPage7BgTop2_7+"px";
	
	bookPage8BgAccess7.style.display="block";
	bookPage8BgAccess7.style.opacity=bookPage8BgOpacity2_7;
	
	bookPage9BgAccess7.style.display="block";
	bookPage9BgAccess7.style.opacity=bookPage9BgOpacity2_7;
	
	bookPage10BgAccess7.style.display="block";
	bookPage10BgAccess7.style.opacity=bookPage10BgOpacity2_7;
	
	bookParagraphBg7Access7.style.opacity=bookParagraphBg7Opacity2_7;
	
	chapter1Access7.style.display="block";
	chapter1Access7.style.opacity=chapter1Opacity2_7;
	
	page1Access7.style.display="block";
	page1Access7.style.opacity=page1Opacity2_7;
	
	page2Access7.style.display="block";
	page2Access7.style.opacity=page2Opacity2_7;
	
	page3Access7.style.display="block";
	page3Access7.style.opacity=page3Opacity2_7;
	
	page4Access7.style.display="block";
	page4Access7.style.opacity=page4Opacity2_7;
	
	page5Access7.style.display="block";
	page5Access7.style.opacity=page5Opacity2_7;
	
	page6Access7.style.display="block";
	page6Access7.style.opacity=page6Opacity2_7;
	
	page7Access7.style.top=page7Top2_7+"px";
	
	page8Access7.style.display="block";
	page8Access7.style.opacity=page8Opacity2_7;
	
	page9Access7.style.display="block";
	page9Access7.style.opacity=page9Opacity2_7;
	
	page10Access7.style.display="block";
	page10Access7.style.opacity=page10Opacity2_7;
	
	paragraph1Access7.style.opacity=paragraph1Opacity2_7;
	paragraph2Access7.style.opacity=paragraph2Opacity2_7;
	paragraph3Access7.style.opacity=paragraph3Opacity2_7;
	paragraph4Access7.style.opacity=paragraph4Opacity2_7;
	paragraph5Access7.style.opacity=paragraph5Opacity2_7;
	
	if(bookParagraphBg7Opacity2_7<=0)
	{
		bookPage7BgTop2_7+=0.5;
		
		bookParagraphBg7Opacity2_7=0;
		bookParagraphBg7Access7.style.display="none";
		
		page7Top2_7+=0.5;
		
		paragraph1Opacity2_7=0;
		paragraph2Opacity2_7=0;
		paragraph3Opacity2_7=0;
		paragraph4Opacity2_7=0;
		paragraph5Opacity2_7=0;
		
		paragraph1Access7.style.display="none";
		paragraph2Access7.style.display="none";
		paragraph3Access7.style.display="none";
		paragraph4Access7.style.display="none";
		paragraph5Access7.style.display="none";
		
		if(bookPage7BgTop2_7>=128)
		{
			bookChapter1BgOpacity2_7+=0.01;
			
			bookPage1BgOpacity2_7+=0.01;
			bookPage2BgOpacity2_7+=0.01;
			bookPage3BgOpacity2_7+=0.01;
			bookPage4BgOpacity2_7+=0.01;
			bookPage5BgOpacity2_7+=0.01;
			bookPage6BgOpacity2_7+=0.01;
			
			bookPage7BgTop2_7=192;
			
			bookPage8BgOpacity2_7+=0.01;
			bookPage9BgOpacity2_7+=0.01;
			bookPage10BgOpacity2_7+=0.01;
			
			chapter1Opacity2_7+=0.01;
			
			page1Opacity2_7+=0.01;
			page2Opacity2_7+=0.01;
			page3Opacity2_7+=0.01;
			page4Opacity2_7+=0.01;
			page5Opacity2_7+=0.01;
			page6Opacity2_7+=0.01;
			
			page7Top2_7=194;
			
			page8Opacity2_7+=0.01;
			page9Opacity2_7+=0.01;
			page10Opacity2_7+=0.01;
			
			if(bookPage1BgOpacity2_7>=1)
			{
				bookChapter1BgOpacity2_7=1;
				
				bookPage1BgOpacity2_7=1;
				bookPage2BgOpacity2_7=1;
				bookPage3BgOpacity2_7=1;
				bookPage4BgOpacity2_7=1;
				bookPage5BgOpacity2_7=1;
				bookPage6BgOpacity2_7=1;
				
				bookPage8BgOpacity2_7=1;
				bookPage9BgOpacity2_7=1;
				bookPage10BgOpacity2_7=1;
				
				chapter1Opacity2_7=1;
				
				page1Opacity2_7=1;
				page2Opacity2_7=1;
				page3Opacity2_7=1;
				page4Opacity2_7=1;
				page5Opacity2_7=1;
				page6Opacity2_7=1;
				
				page8Opacity2_7=1;
				page9Opacity2_7=1;
				page10Opacity2_7=1;
				
				isParagraphAnimated2_7=true;
				
				if(isParagraphAnimated2_7==true)
				{
					bookChapter1BgOpacity2_7=0;
				
					bookPage1BgOpacity2_7=0;
					bookPage2BgOpacity2_7=0;
					bookPage3BgOpacity2_7=0;
					bookPage4BgOpacity2_7=0;
					bookPage5BgOpacity2_7=0;
					bookPage6BgOpacity2_7=0;
					
					bookPage7BgTop2_7=-52;
										
					bookPage8BgOpacity2_7=0;
					bookPage9BgOpacity2_7=0;
					bookPage10BgOpacity2_7=0;
					
					bookParagraphBg7Opacity2_7=1;
					
					chapter1Opacity2_7=0;
					
					page1Opacity2_7=0;
					page2Opacity2_7=0;
					page3Opacity2_7=0;
					page4Opacity2_7=0;
					page5Opacity2_7=0;
					page6Opacity2_7=0;
					
					page7Top2_7=-50;
					
					page8Opacity2_7=0;
					page9Opacity2_7=0;
					page10Opacity2_7=0;
					
					paragraph1Opacity2_7=1;
					paragraph2Opacity2_7=1;
					paragraph3Opacity2_7=1;
					paragraph4Opacity2_7=1;
					paragraph5Opacity2_7=1;
		
				}
				
				window.clearInterval(paragraphAnimate2_7);
			}
		}
	}
	
	bookParagraphBg7Opacity2_7-=0.01;
	
	paragraph1Opacity2_7-=0.01;
	paragraph2Opacity2_7-=0.01;
	paragraph3Opacity2_7-=0.01;
	paragraph4Opacity2_7-=0.01;
	paragraph5Opacity2_7-=0.01;
}

window.addEventListener("load",bookSetup3_7,false);