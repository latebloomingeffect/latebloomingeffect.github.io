/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess2;
var bookChapter1BgOpacity1_2=1;
var bookChapter1BgOpacity2_2=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess2;
var bookPage1BgOpacity1_2=1;
var bookPage1BgOpacity2_2=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess2;
var bookPage2BgTop1_2=32;
var bookPage2BgTop2_2=-52;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess2;
var bookPage3BgOpacity1_2=1;
var bookPage3BgOpacity2_2=0;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess2;
var bookPage4BgOpacity1_2=1;
var bookPage4BgOpacity2_2=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess2;
var bookPage5BgOpacity1_2=1;
var bookPage5BgOpacity2_2=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess2;
var bookPage6BgOpacity1_2=1;
var bookPage6BgOpacity2_2=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess2;
var bookPage7BgOpacity1_2=1;
var bookPage7BgOpacity2_2=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess2;
var bookPage8BgOpacity1_2=1;
var bookPage8BgOpacity2_2=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess2;
var bookPage9BgOpacity1_2=1;
var bookPage9BgOpacity2_2=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess2;
var bookPage10BgOpacity1_2=1;
var bookPage10BgOpacity2_2=0;

//Variables required to manipulate the Book Paragraphs 2 Bg element
var bookParagraphBg2Access2;
var bookParagraphBg2Opacity1_2=0;
var bookParagraphBg2Opacity2_2=1;

//Variables required to manipulate the Chapter 1 element
var chapter1Access2;
var chapter1Opacity1_2=1;
var chapter1Opacity2_2=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_2=false;
var isParagraphAnimated2_2=false;

//Variables required to manipulate the Page 1 element
var page1Access2;
var page1Opacity1_2=1;
var page1Opacity2_2=0;

//Variables required to manipulate the Page 2 element
var page2Access2;
var page2Top1_2=34;
var page2Top2_2=-50;

//Variables required to manipulate the Page 3 element
var page3Access2;
var page3Opacity1_2=1;
var page3Opacity2_2=0;

//Variables required to manipulate the Page 4 element
var page4Access2;
var page4Opacity1_2=1;
var page4Opacity2_2=0;

//Variables required to manipulate the Page 5 element
var page5Access2;
var page5Opacity1_2=1;
var page5Opacity2_2=0;

//Variables required to manipulate the Page 6 element
var page6Access2;
var page6Opacity1_2=1;
var page6Opacity2_2=0;

//Variables required to manipulate the Page 7 element
var page7Access2;
var page7Opacity1_2=1;
var page7Opacity2_2=0;

//Variables required to manipulate the Page 8 element
var page8Access2;
var page8Opacity1_2=1;
var page8Opacity2_2=0;

//Variables required to manipulate the Page 9 element
var page9Access2;
var page9Opacity1_2=1;
var page9Opacity2_2=0;

//Variables required to manipulate the Page 10 element
var page10Access2;
var page10Opacity1_2=1;
var page10Opacity2_2=0;

//Variables required to manipulate the Paragraph 1 element
var paragraph1Access2;
var paragraph1Opacity1_2=0;
var paragraph1Opacity2_2=1;

//Variables required to manipulate the Paragraph 2 element
var paragraph2Access2;
var paragraph2Opacity1_2=0;
var paragraph2Opacity2_2=1;

//Variables required to manipulate the Paragraph 3 element
var paragraph3Access2;
var paragraph3Opacity1_2=0;
var paragraph3Opacity2_2=1;

//Variables required to manipulate the Paragraph 4 element
var paragraph4Access2;
var paragraph4Opacity1_2=0;
var paragraph4Opacity2_2=1;

//Variables required to manipulate the Paragraph 5 element
var paragraph5Access2;
var paragraph5Opacity1_2=0;
var paragraph5Opacity2_2=1;

var paragraphAnimate1_2;
var paragraphAnimate2_2;

function bookSetup3_2()
{
	bookParagraphBg2Access2=document.getElementById("bookParagraphBg2");
	bookParagraphBg2Access2.addEventListener("click",animateParagraphs2_2,false);
	
	page2Access2=document.getElementById("page2");
	page2Access2.addEventListener("click",animateParagraphs1_2,false);
}

function animateParagraphs1_2()
{
	paragraphAnimate1_2=window.setInterval(showPage2Paragraphs2,15);
}

function animateParagraphs2_2()
{
	paragraphAnimate2_2=window.setInterval(hidePage2Paragraphs2,15);
}

function showPage2Paragraphs2()
{
	bookChapter1BgAccess2=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess2=document.getElementById("bookPage1Bg");
	bookPage2BgAccess2=document.getElementById("bookPage2Bg");
	bookPage3BgAccess2=document.getElementById("bookPage3Bg");
	bookPage4BgAccess2=document.getElementById("bookPage4Bg");
	bookPage5BgAccess2=document.getElementById("bookPage5Bg");
	bookPage6BgAccess2=document.getElementById("bookPage6Bg");
	bookPage7BgAccess2=document.getElementById("bookPage7Bg");
	bookPage8BgAccess2=document.getElementById("bookPage8Bg");
	bookPage9BgAccess2=document.getElementById("bookPage9Bg");
	bookPage10BgAccess2=document.getElementById("bookPage10Bg");
	
	bookParagraphBg2Access2=document.getElementById("bookParagraphBg2");
	
	chapter1Access2=document.getElementById("chapter1");
	
	page1Access2=document.getElementById("page1");
	page2Access2=document.getElementById("page2");
	page3Access2=document.getElementById("page3");
	page4Access2=document.getElementById("page4");
	page5Access2=document.getElementById("page5");
	page6Access2=document.getElementById("page6");
	page7Access2=document.getElementById("page7");
	page8Access2=document.getElementById("page8");
	page9Access2=document.getElementById("page9");
	page10Access2=document.getElementById("page10");
	
	paragraph1Access2=document.getElementById("bookParagraph2-1");
	paragraph2Access2=document.getElementById("bookParagraph2-2");
	paragraph3Access2=document.getElementById("bookParagraph2-3");
	paragraph4Access2=document.getElementById("bookParagraph2-4");
	paragraph5Access2=document.getElementById("bookParagraph2-5");
	
	bookChapter1BgAccess2.style.opacity=bookChapter1BgOpacity1_2;
	
	bookPage1BgAccess2.style.opacity=bookPage1BgOpacity1_2;
	
	bookPage2BgAccess2.style.top=bookPage2BgTop1_2+"px";
	
	bookPage3BgAccess2.style.opacity=bookPage3BgOpacity1_2;
	bookPage4BgAccess2.style.opacity=bookPage4BgOpacity1_2;
	bookPage5BgAccess2.style.opacity=bookPage5BgOpacity1_2;
	bookPage6BgAccess2.style.opacity=bookPage6BgOpacity1_2;
	bookPage7BgAccess2.style.opacity=bookPage7BgOpacity1_2;
	bookPage8BgAccess2.style.opacity=bookPage8BgOpacity1_2;
	bookPage9BgAccess2.style.opacity=bookPage9BgOpacity1_2;
	bookPage10BgAccess2.style.opacity=bookPage10BgOpacity1_2;
	
	bookParagraphBg2Access2.style.display="block";
	bookParagraphBg2Access2.style.opacity=bookParagraphBg2Opacity1_2;
	
	chapter1Access2.style.opacity=chapter1Opacity1_2;
	
	page1Access2.style.opacity=page1Opacity1_2;
	
	page2Access2.style.top=page2Top1_2+"px";
	
	page3Access2.style.opacity=page3Opacity1_2;
	page4Access2.style.opacity=page4Opacity1_2;
	page5Access2.style.opacity=page5Opacity1_2;
	page6Access2.style.opacity=page6Opacity1_2;
	page7Access2.style.opacity=page7Opacity1_2;
	page8Access2.style.opacity=page8Opacity1_2;
	page9Access2.style.opacity=page9Opacity1_2;
	page10Access2.style.opacity=page10Opacity1_2;
	
	paragraph1Access2.style.display="block";
	paragraph1Access2.style.opacity=paragraph1Opacity1_2;
	
	paragraph2Access2.style.display="block";
	paragraph2Access2.style.opacity=paragraph2Opacity1_2;
	
	paragraph3Access2.style.display="block";
	paragraph3Access2.style.opacity=paragraph3Opacity1_2;
	
	paragraph4Access2.style.display="block";
	paragraph4Access2.style.opacity=paragraph4Opacity1_2;
	
	paragraph5Access2.style.display="block";
	paragraph5Access2.style.opacity=paragraph5Opacity1_2;
	
	if(bookPage1BgOpacity1_2<=0)
	{
		bookChapter1BgOpacity1_2=0;
		bookChapter1BgAccess2.style.display="none";
		
		bookPage1BgOpacity1_2=0;
		bookPage1BgAccess2.style.display="none";
		
		bookPage2BgTop1_2-=0.5;
		
		bookPage3BgOpacity1_2=0;
		bookPage4BgOpacity1_2=0;
		bookPage5BgOpacity1_2=0;
		bookPage6BgOpacity1_2=0;
		bookPage7BgOpacity1_2=0;
		bookPage8BgOpacity1_2=0;
		bookPage9BgOpacity1_2=0;
		bookPage10BgOpacity1_2=0;
		
		bookPage3BgAccess2.style.display="none";
		bookPage4BgAccess2.style.display="none";
		bookPage5BgAccess2.style.display="none";
		bookPage6BgAccess2.style.display="none";
		bookPage7BgAccess2.style.display="none";
		bookPage8BgAccess2.style.display="none";
		bookPage9BgAccess2.style.display="none";
		bookPage10BgAccess2.style.display="none";
		
		chapter1Opacity1_2=0;
		chapter1Access2.style.display="none";
		
		page1Opacity1_2=0;
		page1Access2.style.display="none";
		
		page2Top1_2-=0.5;
		
		page3Opacity1_2=0;
		page4Opacity1_2=0;
		page5Opacity1_2=0;
		page6Opacity1_2=0;
		page7Opacity1_2=0;
		page8Opacity1_2=0;
		page9Opacity1_2=0;
		page10Opacity1_2=0;
		
		page3Access2.style.display="none";
		page4Access2.style.display="none";
		page5Access2.style.display="none";
		page6Access2.style.display="none";
		page7Access2.style.display="none";
		page8Access2.style.display="none";
		page9Access2.style.display="none";
		page10Access2.style.display="none";
		
		if(bookPage2BgTop1_2<=-52)
		{
			bookPage2BgTop1_2=-52;
			
			bookParagraphBg2Opacity1_2+=0.01;
			
			page2Top1_2=-50;
			
			paragraph1Opacity1_2+=0.01;
			paragraph2Opacity1_2+=0.01;
			paragraph3Opacity1_2+=0.01;
			paragraph4Opacity1_2+=0.01;
			paragraph5Opacity1_2+=0.01;
			
			if(bookParagraphBg2Opacity1_2>=1)
			{
				
				bookParagraphBg2Opacity1_2=1;
		
				paragraph1Opacity1_2=1;
				paragraph2Opacity1_2=1;
				paragraph3Opacity1_2=1;
				paragraph4Opacity1_2=1;
				paragraph5Opacity1_2=1;
				
				isParagraphAnimated1_2=true;
				
				if(isParagraphAnimated1_2==true)
				{
					bookChapter1BgOpacity1_2=1;
					
					bookPage1BgOpacity1_2=1;
					
					bookPage2BgTop1_2=32;
					
					bookPage3BgOpacity1_2=1;
					bookPage4BgOpacity1_2=1;
					bookPage5BgOpacity1_2=1;
					bookPage6BgOpacity1_2=1;
					bookPage7BgOpacity1_2=1;
					bookPage8BgOpacity1_2=1;
					bookPage9BgOpacity1_2=1;
					bookPage10BgOpacity1_2=1;
		
					bookParagraphBg2Opacity1_2=0;
					
					chapter1Opacity1_2=1;
					
					page1Opacity1_2=1;
					
					page2Top1_2=34;
					
					page3Opacity1_2=1;
					page4Opacity1_2=1;
					page5Opacity1_2=1;
					page6Opacity1_2=1;
					page7Opacity1_2=1;
					page8Opacity1_2=1;
					page9Opacity1_2=1;
					page10Opacity1_2=1;
				
					paragraph1Opacity1_2=0;
					paragraph2Opacity1_2=0;
					paragraph3Opacity1_2=0;
					paragraph4Opacity1_2=0;
					paragraph5Opacity1_2=0;
				}
				
				window.clearInterval(paragraphAnimate1_2);
			}
		}
	}
	
	bookChapter1BgOpacity1_2-=0.01;
	
	bookPage1BgOpacity1_2-=0.01;
	
	bookPage3BgOpacity1_2-=0.01;
	bookPage4BgOpacity1_2-=0.01;
	bookPage5BgOpacity1_2-=0.01;
	bookPage6BgOpacity1_2-=0.01;
	bookPage7BgOpacity1_2-=0.01;
	bookPage8BgOpacity1_2-=0.01;
	bookPage9BgOpacity1_2-=0.01;
	bookPage10BgOpacity1_2-=0.01;
	
	chapter1Opacity1_2-=0.01;
	
	page1Opacity1_2-=0.01;
	
	page3Opacity1_2-=0.01;
	page4Opacity1_2-=0.01;
	page5Opacity1_2-=0.01;
	page6Opacity1_2-=0.01;
	page7Opacity1_2-=0.01;
	page8Opacity1_2-=0.01;
	page9Opacity1_2-=0.01;
	page10Opacity1_2-=0.01;
}

function hidePage2Paragraphs2()
{
	bookChapter1BgAccess2=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess2=document.getElementById("bookPage1Bg");
	bookPage2BgAccess2=document.getElementById("bookPage2Bg");
	bookPage3BgAccess2=document.getElementById("bookPage3Bg");
	bookPage4BgAccess2=document.getElementById("bookPage4Bg");
	bookPage5BgAccess2=document.getElementById("bookPage5Bg");
	bookPage6BgAccess2=document.getElementById("bookPage6Bg");
	bookPage7BgAccess2=document.getElementById("bookPage7Bg");
	bookPage8BgAccess2=document.getElementById("bookPage8Bg");
	bookPage9BgAccess2=document.getElementById("bookPage9Bg");
	bookPage10BgAccess2=document.getElementById("bookPage10Bg");
	
	bookParagraphBg2Access2=document.getElementById("bookParagraphBg2");
	
	chapter1Access2=document.getElementById("chapter1");
	
	page1Access2=document.getElementById("page1");
	page2Access2=document.getElementById("page2");
	page3Access2=document.getElementById("page3");
	page4Access2=document.getElementById("page4");
	page5Access2=document.getElementById("page5");
	page6Access2=document.getElementById("page6");
	page7Access2=document.getElementById("page7");
	page8Access2=document.getElementById("page8");
	page9Access2=document.getElementById("page9");
	page10Access2=document.getElementById("page10");
	
	paragraph1Access2=document.getElementById("bookParagraph2-1");
	paragraph2Access2=document.getElementById("bookParagraph2-2");
	paragraph3Access2=document.getElementById("bookParagraph2-3");
	paragraph4Access2=document.getElementById("bookParagraph2-4");
	paragraph5Access2=document.getElementById("bookParagraph2-5");
	
	bookChapter1BgAccess2.style.display="block";
	bookChapter1BgAccess2.style.opacity=bookChapter1BgOpacity2_2;
	
	bookPage1BgAccess2.style.display="block";
	bookPage1BgAccess2.style.opacity=bookPage1BgOpacity2_2;
	
	bookPage2BgAccess2.style.top=bookPage2BgTop2_2+"px";
	
	bookPage3BgAccess2.style.display="block";
	bookPage3BgAccess2.style.opacity=bookPage3BgOpacity2_2;
	
	bookPage4BgAccess2.style.display="block";
	bookPage4BgAccess2.style.opacity=bookPage4BgOpacity2_2;
	
	bookPage5BgAccess2.style.display="block";
	bookPage5BgAccess2.style.opacity=bookPage5BgOpacity2_2;
	
	bookPage6BgAccess2.style.display="block";
	bookPage6BgAccess2.style.opacity=bookPage6BgOpacity2_2;
	
	bookPage7BgAccess2.style.display="block";
	bookPage7BgAccess2.style.opacity=bookPage7BgOpacity2_2;
	
	bookPage8BgAccess2.style.display="block";
	bookPage8BgAccess2.style.opacity=bookPage8BgOpacity2_2;
	
	bookPage9BgAccess2.style.display="block";
	bookPage9BgAccess2.style.opacity=bookPage9BgOpacity2_2;
	
	bookPage10BgAccess2.style.display="block";
	bookPage10BgAccess2.style.opacity=bookPage10BgOpacity2_2;
	
	bookParagraphBg2Access2.style.opacity=bookParagraphBg2Opacity2_2;
	
	chapter1Access2.style.display="block";
	chapter1Access2.style.opacity=chapter1Opacity2_2;
	
	page1Access2.style.display="block";
	page1Access2.style.opacity=page1Opacity2_2;
	
	page2Access2.style.top=page2Top2_2+"px";
	
	page3Access2.style.display="block";
	page3Access2.style.opacity=page3Opacity2_2;
	
	page4Access2.style.display="block";
	page4Access2.style.opacity=page4Opacity2_2;
	
	page5Access2.style.display="block";
	page5Access2.style.opacity=page5Opacity2_2;
	
	page6Access2.style.display="block";
	page6Access2.style.opacity=page6Opacity2_2;
	
	page7Access2.style.display="block";
	page7Access2.style.opacity=page7Opacity2_2;
	
	page8Access2.style.display="block";
	page8Access2.style.opacity=page8Opacity2_2;
	
	page9Access2.style.display="block";
	page9Access2.style.opacity=page9Opacity2_2;
	
	page10Access2.style.display="block";
	page10Access2.style.opacity=page10Opacity2_2;
	
	paragraph1Access2.style.opacity=paragraph1Opacity2_2;
	paragraph2Access2.style.opacity=paragraph2Opacity2_2;
	paragraph3Access2.style.opacity=paragraph3Opacity2_2;
	paragraph4Access2.style.opacity=paragraph4Opacity2_2;
	paragraph5Access2.style.opacity=paragraph5Opacity2_2;
	
	if(bookParagraphBg2Opacity2_2<=0)
	{
		bookPage2BgTop2_2+=0.5;
		
		bookParagraphBg2Opacity2_2=0;
		bookParagraphBg2Access2.style.display="none";
		
		page2Top2_2+=0.5;
		
		paragraph1Opacity2_2=0;
		paragraph2Opacity2_2=0;
		paragraph3Opacity2_2=0;
		paragraph4Opacity2_2=0;
		paragraph5Opacity2_2=0;
		
		paragraph1Access2.style.display="none";
		paragraph2Access2.style.display="none";
		paragraph3Access2.style.display="none";
		paragraph4Access2.style.display="none";
		paragraph5Access2.style.display="none";
		
		if(bookPage2BgTop2_2>=32)
		{
			bookChapter1BgOpacity2_2+=0.01;
			
			bookPage1BgOpacity2_2+=0.01;
			
			bookPage2BgTop2_2=32;
			
			bookPage3BgOpacity2_2+=0.01;
			bookPage4BgOpacity2_2+=0.01;
			bookPage5BgOpacity2_2+=0.01;
			bookPage6BgOpacity2_2+=0.01;
			bookPage7BgOpacity2_2+=0.01;
			bookPage8BgOpacity2_2+=0.01;
			bookPage9BgOpacity2_2+=0.01;
			bookPage10BgOpacity2_2+=0.01;
			
			chapter1Opacity2_2+=0.01;
			
			page1Opacity2_2+=0.01;
			
			page2Top2_2=34;
			
			page3Opacity2_2+=0.01;
			page4Opacity2_2+=0.01;
			page5Opacity2_2+=0.01;
			page6Opacity2_2+=0.01;
			page7Opacity2_2+=0.01;
			page8Opacity2_2+=0.01;
			page9Opacity2_2+=0.01;
			page10Opacity2_2+=0.01;
			
			if(bookPage1BgOpacity2_2>=1)
			{
				bookChapter1BgOpacity2_2=1;
				
				bookPage1BgOpacity2_2=1;
				
				bookPage3BgOpacity2_2=1;
				bookPage4BgOpacity2_2=1;
				bookPage5BgOpacity2_2=1;
				bookPage6BgOpacity2_2=1;
				bookPage7BgOpacity2_2=1;
				bookPage8BgOpacity2_2=1;
				bookPage9BgOpacity2_2=1;
				bookPage10BgOpacity2_2=1;
				
				chapter1Opacity2_2=1;
				
				page1Opacity2_2=1;
				
				page3Opacity2_2=1;
				page4Opacity2_2=1;
				page5Opacity2_2=1;
				page6Opacity2_2=1;
				page7Opacity2_2=1;
				page8Opacity2_2=1;
				page9Opacity2_2=1;
				page10Opacity2_2=1;
				
				isParagraphAnimated2_2=true;
				
				if(isParagraphAnimated2_2==true)
				{
					bookChapter1BgOpacity2_2=0;
				
					bookPage1BgOpacity2_2=0;
					
					bookPage2BgTop2_2=-52;
					
					bookPage3BgOpacity2_2=0;
					bookPage4BgOpacity2_2=0;
					bookPage5BgOpacity2_2=0;
					bookPage6BgOpacity2_2=0;
					bookPage7BgOpacity2_2=0;
					bookPage8BgOpacity2_2=0;
					bookPage9BgOpacity2_2=0;
					bookPage10BgOpacity2_2=0;
					
					bookParagraphBg2Opacity2_2=1;
					
					chapter1Opacity2_2=0;
					
					page1Opacity2_2=0;
					
					page2Top2_2=-50;
					
					page3Opacity2_2=0;
					page4Opacity2_2=0;
					page5Opacity2_2=0;
					page6Opacity2_2=0;
					page7Opacity2_2=0;
					page8Opacity2_2=0;
					page9Opacity2_2=0;
					page10Opacity2_2=0;
					
					paragraph1Opacity2_2=1;
					paragraph2Opacity2_2=1;
					paragraph3Opacity2_2=1;
					paragraph4Opacity2_2=1;
					paragraph5Opacity2_2=1;
				}
				window.clearInterval(paragraphAnimate2_2);
			}
		}
	}
	
	bookParagraphBg2Opacity2_2-=0.01;
	
	paragraph1Opacity2_2-=0.01;
	paragraph2Opacity2_2-=0.01;
	paragraph3Opacity2_2-=0.01;
	paragraph4Opacity2_2-=0.01;
	paragraph5Opacity2_2-=0.01;
}

window.addEventListener("load",bookSetup3_2,false);