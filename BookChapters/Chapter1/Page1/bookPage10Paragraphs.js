/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess10;
var bookChapter1BgOpacity1_10=1;
var bookChapter1BgOpacity2_10=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess10;
var bookPage1BgOpacity1_10=1;
var bookPage1BgOpacity2_10=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess10;
var bookPage2BgOpacity1_10=1;
var bookPage2BgOpacity2_10=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess10;
var bookPage3BgOpacity1_10=1;
var bookPage3BgOpacity2_10=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess10;
var bookPage4BgOpacity1_10=1;
var bookPage4BgOpacity2_10=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess10;
var bookPage5BgOpacity1_10=1;
var bookPage5BgOpacity2_10=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess10;
var bookPage6BgOpacity1_10=1;
var bookPage6BgOpacity2_10=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess10;
var bookPage7BgOpacity1_10=1;
var bookPage7BgOpacity2_10=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess10;
var bookPage8BgOpacity1_10=1;
var bookPage8BgOpacity2_10=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess10;
var bookPage9BgOpacity1_10=1;
var bookPage9BgOpacity2_10=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess5;
var bookPage10BgTop1_10=288;
var bookPage10BgTop2_10=-52;

//Variables required to manipulate the Book Paragraph Bg 5 element
var bookParagraphBg10Access10;
var bookParagraphBg10Opacity1_10=0;
var bookParagraphBg10Opacity2_10=1;

//Variables required to manipulate the chapter 1 element
var chapter1Access10;
var chapter1Opacity1_10=1;
var chapter1Opacity2_10=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_10=false;
var isParagraphAnimated2_10=false;

//Variables required to manipulate the Page 1 element
var page1Access10;
var page1Opacity1_10=1;
var page1Opacity2_10=0;

//Variables required to manipulate the Page 2 element
var page2Access10;
var page2Opacity1_10=1;
var page2Opacity2_10=0;

//Variables required to manipulate the Page 3 element
var page3Access10;
var page3Opacity1_10=1;
var page3Opacity2_10=0;

//Variables required to manipulate the Page 4 element
var page4Access10;
var page4Opacity1_10=1;
var page4Opacity2_10=0;

//Variables required to manipulate the Page 5 element
var page5Access10;
var page5Opacity1_10=1;
var page5Opacity2_10=0;

//Variables required to manipulate the Page 6 element
var page6Access10;
var page6Opacity1_10=1;
var page6Opacity2_10=0;

//Variables required to manipulate the Page 7 element
var page7Access10;
var page7Opacity1_10=1;
var page7Opacity2_10=0;

//Variables required to manipulate the Page 8 element
var page8Access10;
var page8Opacity1_10=1;
var page8Opacity2_10=0;

//Variables required to manipulate the Page 9 element
var page9Access10;
var page9Opacity1_10=1;
var page9Opacity2_10=0;

//Variables required to manipulate the Page 10 element
var page10Access10;
var page10Top1_10=290;
var page10Top2_10=-50;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access10;
var paragraph1Opacity1_10=0;
var paragraph1Opacity2_10=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access10;
var paragraph2Opacity1_10=0;
var paragraph2Opacity2_10=1;

var paragraphAnimate1_10;
var paragraphAnimate2_10;

function bookSetup3_10()
{
	bookParagraphBg10Access10=document.getElementById("bookParagraphBg10");
	bookParagraphBg10Access10.addEventListener("click",animateParagraphs2_10,false);
	
	page10Access10=document.getElementById("page10");
	page10Access10.addEventListener("click",animateParagraphs1_10,false);
}

function animateParagraphs1_10()
{
	paragraphAnimate1_10=window.setInterval(showPage10Paragraphs10,15);
}

function animateParagraphs2_10()
{
	paragraphAnimate2_10=window.setInterval(hidePage10Paragraphs10,15);
}

function showPage10Paragraphs10()
{
	bookChapter1BgAccess10=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg10Access10=document.getElementById("bookParagraphBg10");
	
	bookPage1BgAccess10=document.getElementById("bookPage1Bg");
	bookPage2BgAccess10=document.getElementById("bookPage2Bg");
	bookPage3BgAccess10=document.getElementById("bookPage3Bg");
	bookPage4BgAccess10=document.getElementById("bookPage4Bg");
	bookPage5BgAccess10=document.getElementById("bookPage5Bg");
	bookPage6BgAccess10=document.getElementById("bookPage6Bg");
	bookPage7BgAccess10=document.getElementById("bookPage7Bg");
	bookPage8BgAccess10=document.getElementById("bookPage8Bg");
	bookPage9BgAccess10=document.getElementById("bookPage9Bg");
	bookPage10BgAccess10=document.getElementById("bookPage10Bg");
	
	chapter1Access10=document.getElementById("chapter1");
	
	page1Access10=document.getElementById("page1");
	page2Access10=document.getElementById("page2");
	page3Access10=document.getElementById("page3");
	page4Access10=document.getElementById("page4");
	page5Access10=document.getElementById("page5");
	page6Access10=document.getElementById("page6");
	page7Access10=document.getElementById("page7");
	page8Access10=document.getElementById("page8");
	page9Access10=document.getElementById("page9");
	page10Access10=document.getElementById("page10");
	
	paragraph1Access10=document.getElementById("bookParagraph10-1");
	paragraph2Access10=document.getElementById("bookParagraph10-2");
	
	bookChapter1BgAccess10.style.opacity=bookChapter1BgOpacity1_10;
	
	bookPage1BgAccess10.style.opacity=bookPage1BgOpacity1_10;
	bookPage2BgAccess10.style.opacity=bookPage2BgOpacity1_10;
	bookPage3BgAccess10.style.opacity=bookPage3BgOpacity1_10;
	bookPage4BgAccess10.style.opacity=bookPage4BgOpacity1_10;
	bookPage5BgAccess10.style.opacity=bookPage5BgOpacity1_10;
	bookPage6BgAccess10.style.opacity=bookPage6BgOpacity1_10;
	bookPage7BgAccess10.style.opacity=bookPage7BgOpacity1_10;
	bookPage8BgAccess10.style.opacity=bookPage8BgOpacity1_10;
	bookPage9BgAccess10.style.opacity=bookPage9BgOpacity1_10;
	
	bookPage10BgAccess10.style.top=bookPage10BgTop1_10+"px";
	
	bookParagraphBg10Access10.style.display="block";
	bookParagraphBg10Access10.style.opacity=bookParagraphBg10Opacity1_10;
	
	chapter1Access10.style.opacity=chapter1Opacity1_10;
	
	page1Access10.style.opacity=page1Opacity1_10;
	page2Access10.style.opacity=page2Opacity1_10;
	page3Access10.style.opacity=page3Opacity1_10;
	page4Access10.style.opacity=page4Opacity1_10;
	page5Access10.style.opacity=page5Opacity1_10;
	page6Access10.style.opacity=page6Opacity1_10;
	page7Access10.style.opacity=page7Opacity1_10;
	page8Access10.style.opacity=page8Opacity1_10;
	page9Access10.style.opacity=page9Opacity1_10;
	
	page10Access10.style.top=page10Top1_10+"px";
	
	paragraph1Access10.style.display="block";
	paragraph1Access10.style.opacity=paragraph1Opacity1_10;
	
	paragraph2Access10.style.display="block";
	paragraph2Access10.style.opacity=paragraph2Opacity1_10;
	
	if(bookChapter1BgOpacity1_10<=0)
	{
		bookChapter1BgOpacity1_10=0
		bookChapter1BgAccess10.style.display="none";
		
		bookPage1BgOpacity1_10=0;
		bookPage2BgOpacity1_10=0;
		bookPage3BgOpacity1_10=0;
		bookPage4BgOpacity1_10=0;
		bookPage5BgOpacity1_10=0;
		bookPage6BgOpacity1_10=0;
		bookPage7BgOpacity1_10=0;
		bookPage8BgOpacity1_10=0;
		bookPage9BgOpacity1_10=0;
		
		bookPage1BgAccess10.style.display="none";
		bookPage2BgAccess10.style.display="none";
		bookPage3BgAccess10.style.display="none";
		bookPage4BgAccess10.style.display="none";
		bookPage5BgAccess10.style.display="none";
		bookPage6BgAccess10.style.display="none";
		bookPage7BgAccess10.style.display="none";
		bookPage8BgAccess10.style.display="none";
		bookPage9BgAccess10.style.display="none";
		
		bookPage10BgTop1_10-=0.5;
		
		chapter1Opacity1_10=0;
		chapter1Access10.style.display="none";
		
		page1Opacity1_10=0;
		page2Opacity1_10=0;
		page3Opacity1_10=0;
		page4Opacity1_10=0;
		page5Opacity1_10=0;
		page6Opacity1_10=0;
		page7Opacity1_10=0;
		page8Opacity1_10=0;
		page9Opacity1_10=0;
		
		page10Top1_10-=0.5;
		
		page1Access10.style.display="none";
		page2Access10.style.display="none";
		page3Access10.style.display="none";
		page4Access10.style.display="none";
		page5Access10.style.display="none";
		page6Access10.style.display="none";
		page7Access10.style.display="none";
		page8Access10.style.display="none";
		page9Access10.style.display="none";
		
		if(bookPage10BgTop1_10<=-52)
		{
			bookPage10BgTop1_10=-52;
			
			bookParagraphBg10Opacity1_10+=0.01;
			
			page10Top1_10=-50;
			
			paragraph1Opacity1_10+=0.01;
			paragraph2Opacity1_10+=0.01;
			
			if(bookParagraphBg10Opacity1_10>=1)
			{
				bookParagraphBg10Opacity1_10=1;
				
				paragraph1Opacity1_10=1;
				paragraph2Opacity1_10=1;
				
				isParagraphAnimated1_10=true;
				
				if(isParagraphAnimated1_10==true)
				{
					bookChapter1BgOpacity1_10=1;
					
					bookPage1BgOpacity1_10=1;
					bookPage2BgOpacity1_10=1;
					bookPage3BgOpacity1_10=1;
					bookPage4BgOpacity1_10=1;
					bookPage5BgOpacity1_10=1;
					bookPage6BgOpacity1_10=1;
					bookPage7BgOpacity1_10=1;
					bookPage8BgOpacity1_10=1;
					bookPage9BgOpacity1_10=1;
					
					bookPage10BgTop1_10=288;
		
					bookParagraphBg10Opacity1_10=0;
					
					chapter1Opacity1_10=1;
					
					page1Opacity1_10=1;
					page2Opacity1_10=1;
					page3Opacity1_10=1;
					page4Opacity1_10=1;
					page5Opacity1_10=1;
					page6Opacity1_10=1;
					page7Opacity1_10=1;
					page8Opacity1_10=1;
					page9Opacity1_10=1;
		
					page10Top1_10=290;
					
					paragraph1Opacity1_10=0;
					paragraph2Opacity1_10=0;
				}
				
				window.clearInterval(paragraphAnimate1_10);
			}
		}
	}

	bookChapter1BgOpacity1_10-=0.01;
	
	bookPage1BgOpacity1_10-=0.01;
	bookPage2BgOpacity1_10-=0.01;
	bookPage3BgOpacity1_10-=0.01;
	bookPage4BgOpacity1_10-=0.01;
	bookPage5BgOpacity1_10-=0.01;
	bookPage6BgOpacity1_10-=0.01;
	bookPage7BgOpacity1_10-=0.01;
	bookPage8BgOpacity1_10-=0.01;
	bookPage9BgOpacity1_10-=0.01;
	
	chapter1Opacity1_10-=0.01;
	
	page1Opacity1_10-=0.01;
	page2Opacity1_10-=0.01;
	page3Opacity1_10-=0.01;
	page4Opacity1_10-=0.01;
	page5Opacity1_10-=0.01;
	page6Opacity1_10-=0.01;
	page7Opacity1_10-=0.01;
	page8Opacity1_10-=0.01;
	page9Opacity1_10-=0.01;
}

function hidePage10Paragraphs10()
{
	bookChapter1BgAccess10=document.getElementById("bookChapter1Bg");
	
	bookParagraphBg10Access10=document.getElementById("bookParagraphBg10");
	
	bookPage1BgAccess10=document.getElementById("bookPage1Bg");
	bookPage2BgAccess10=document.getElementById("bookPage2Bg");
	bookPage3BgAccess10=document.getElementById("bookPage3Bg");
	bookPage4BgAccess10=document.getElementById("bookPage4Bg");
	bookPage5BgAccess10=document.getElementById("bookPage5Bg");
	bookPage6BgAccess10=document.getElementById("bookPage6Bg");
	bookPage7BgAccess10=document.getElementById("bookPage7Bg");
	bookPage8BgAccess10=document.getElementById("bookPage8Bg");
	bookPage9BgAccess10=document.getElementById("bookPage9Bg");
	bookPage10BgAccess10=document.getElementById("bookPage10Bg");
	
	chapter1Access10=document.getElementById("chapter1");
	
	page1Access10=document.getElementById("page1");
	page2Access10=document.getElementById("page2");
	page3Access10=document.getElementById("page3");
	page4Access10=document.getElementById("page4");
	page5Access10=document.getElementById("page5");
	page6Access10=document.getElementById("page6");
	page7Access10=document.getElementById("page7");
	page8Access10=document.getElementById("page8");
	page9Access10=document.getElementById("page9");
	page10Access10=document.getElementById("page10");
	
	paragraph1Access10=document.getElementById("bookParagraph10-1");
	paragraph2Access10=document.getElementById("bookParagraph10-2");
	
	bookChapter1BgAccess10.style.display="block";
	bookChapter1BgAccess10.style.opacity=bookChapter1BgOpacity2_10;
	
	bookPage1BgAccess10.style.display="block";
	bookPage1BgAccess10.style.opacity=bookPage1BgOpacity2_10;
	
	bookPage2BgAccess10.style.display="block";
	bookPage2BgAccess10.style.opacity=bookPage2BgOpacity2_10;
	
	bookPage3BgAccess10.style.display="block";
	bookPage3BgAccess10.style.opacity=bookPage3BgOpacity2_10;
	
	bookPage4BgAccess10.style.display="block";
	bookPage4BgAccess10.style.opacity=bookPage4BgOpacity2_10;
	
	bookPage5BgAccess10.style.display="block";
	bookPage5BgAccess10.style.opacity=bookPage5BgOpacity2_10;
	
	bookPage6BgAccess10.style.display="block";
	bookPage6BgAccess10.style.opacity=bookPage6BgOpacity2_10;
	
	bookPage7BgAccess10.style.display="block";
	bookPage7BgAccess10.style.opacity=bookPage7BgOpacity2_10;
	
	bookPage8BgAccess10.style.display="block";
	bookPage8BgAccess10.style.opacity=bookPage8BgOpacity2_10;
	
	bookPage9BgAccess10.style.display="block";
	bookPage9BgAccess10.style.opacity=bookPage9BgOpacity2_10;
	
	bookPage10BgAccess10.style.top=bookPage10BgTop2_10+"px";
	
	bookParagraphBg10Access10.style.opacity=bookParagraphBg10Opacity2_10;
	
	chapter1Access10.style.display="block";
	chapter1Access10.style.opacity=chapter1Opacity2_10;
	
	page1Access10.style.display="block";
	page1Access10.style.opacity=page1Opacity2_10;
	
	page2Access10.style.display="block";
	page2Access10.style.opacity=page2Opacity2_10;
	
	page3Access10.style.display="block";
	page3Access10.style.opacity=page3Opacity2_10;
	
	page4Access10.style.display="block";
	page4Access10.style.opacity=page4Opacity2_10;
	
	page5Access10.style.display="block";
	page5Access10.style.opacity=page5Opacity2_10;
	
	page6Access10.style.display="block";
	page6Access10.style.opacity=page6Opacity2_10;
	
	page7Access10.style.display="block";
	page7Access10.style.opacity=page7Opacity2_10;
	
	page8Access10.style.display="block";
	page8Access10.style.opacity=page8Opacity2_10;
	
	page9Access10.style.display="block";
	page9Access10.style.opacity=page9Opacity2_10;
	
	page10Access10.style.top=page10Top2_10+"px";
	
	paragraph1Access10.style.opacity=paragraph1Opacity2_10;
	paragraph2Access10.style.opacity=paragraph2Opacity2_10;
	
	if(bookParagraphBg10Opacity2_10<=0)
	{
		bookPage10BgTop2_10+=0.5;
		
		bookParagraphBg10Opacity2_10=0;
		bookParagraphBg10Access10.style.display="none";
		
		page10Top2_10+=0.5;
		
		paragraph1Opacity2_10=0;
		paragraph2Opacity2_10=0;
		
		paragraph1Access10.style.display="none";
		paragraph2Access10.style.display="none";
		
		if(bookPage10BgTop2_10>=288)
		{
			bookChapter1BgOpacity2_10+=0.01;
			
			bookPage1BgOpacity2_10+=0.1;
			bookPage2BgOpacity2_10+=0.1;
			bookPage3BgOpacity2_10+=0.1;
			bookPage4BgOpacity2_10+=0.1;
			bookPage5BgOpacity2_10+=0.1;
			bookPage6BgOpacity2_10+=0.1;
			bookPage7BgOpacity2_10+=0.1;
			bookPage8BgOpacity2_10+=0.1;
			bookPage9BgOpacity2_10+=0.1;
			
			bookPage10BgTop2_10=288;
			
			chapter1Opacity2_10+=0.01;
			
			page1Opacity2_10+=0.01;
			page2Opacity2_10+=0.01;
			page3Opacity2_10+=0.01;
			page4Opacity2_10+=0.01;
			page5Opacity2_10+=0.01;
			page6Opacity2_10+=0.01;
			page7Opacity2_10+=0.01;
			page8Opacity2_10+=0.01;
			page9Opacity2_10+=0.01;
			
			page10Top2_10=290;
			
			if(bookChapter1BgOpacity2_10>=1)
			{
				bookChapter1BgOpacity2_10=1;
				
				bookPage1BgOpacity2_10=1;
				bookPage2BgOpacity2_10=1;
				bookPage3BgOpacity2_10=1;
				bookPage4BgOpacity2_10=1;
				bookPage5BgOpacity2_10=1;
				bookPage6BgOpacity2_10=1;
				bookPage7BgOpacity2_10=1;
				bookPage8BgOpacity2_10=1;
				bookPage9BgOpacity2_10=1;
				
				chapter1Opacity2_10=1;
				
				page1Opacity2_10=1;
				page2Opacity2_10=1;
				page3Opacity2_10=1;
				page4Opacity2_10=1;
				page5Opacity2_10=1;
				page6Opacity2_10=1;
				page7Opacity2_10=1;
				page8Opacity2_10=1;
				page9Opacity2_10=1;
				
				isParagraphAnimated2_10=true;
				
				if(isParagraphAnimated2_10==true)
				{
					bookChapter1BgOpacity2_10=0;
				
					bookPage1BgOpacity2_10=0;
					bookPage2BgOpacity2_10=0;
					bookPage3BgOpacity2_10=0;
					bookPage4BgOpacity2_10=0;
					bookPage5BgOpacity2_10=0;
					bookPage6BgOpacity2_10=0;
					bookPage7BgOpacity2_10=0;
					bookPage8BgOpacity2_10=0;
					bookPage9BgOpacity2_10=0;
					
					bookPage10BgTop2_10=-52;
					
					bookParagraphBg10Opacity2_10=1;
					
					chapter1Opacity2_10=0;
					
					page1Opacity2_10=0;
					page2Opacity2_10=0;
					page3Opacity2_10=0;
					page4Opacity2_10=0;
					page5Opacity2_10=0;
					page6Opacity2_10=0;
					page7Opacity2_10=0;
					page8Opacity2_10=0;
					page9Opacity2_10=0;
					
					page10Top2_10=-50;
					
					paragraph1Opacity2_10=1;
					paragraph2Opacity2_10=1;
				}
				
				window.clearInterval(paragraphAnimate2_10);
			}
		}
	}
	
	bookParagraphBg10Opacity2_10-=0.01;
	
	paragraph1Opacity2_10-=0.01;
	paragraph2Opacity2_10-=0.01;
}

window.addEventListener("load",bookSetup3_10,false);