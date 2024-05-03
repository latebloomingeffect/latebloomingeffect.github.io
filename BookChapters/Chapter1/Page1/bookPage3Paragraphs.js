/*
-------------------------------------------------------------------
book chapter 1 access script of the Late Blooming Effects Studio 
website
-------------------------------------------------------------------
*/

//Variables required to manipulate the Book Chapter 1 Bg element
var bookChapter1BgAccess3;
var bookChapter1BgOpacity1_3=1;
var bookChapter1BgOpacity2_3=0;

//Variables required to manipulate the Book Page 1 Bg element
var bookPage1BgAccess3;
var bookPage1BgOpacity1_3=1;
var bookPage1BgOpacity2_3=0;

//Variables required to manipulate the Book Page 2 Bg element
var bookPage2BgAccess3;
var bookPage2BgOpacity1_3=1;
var bookPage2BgOpacity2_3=0;

//Variables required to manipulate the Book Page 3 Bg element
var bookPage3BgAccess3;
var bookPage3BgTop1_3=64;
var bookPage3BgTop2_3=-52;

//Variables required to manipulate the Book Page 4 Bg element
var bookPage4BgAccess3;
var bookPage4BgOpacity1_3=1;
var bookPage4BgOpacity2_3=0;

//Variables required to manipulate the Book Page 5 Bg element
var bookPage5BgAccess3;
var bookPage5BgOpacity1_3=1;
var bookPage5BgOpacity2_3=0;

//Variables required to manipulate the Book Page 6 Bg element
var bookPage6BgAccess3;
var bookPage6BgOpacity1_3=1;
var bookPage6BgOpacity2_3=0;

//Variables required to manipulate the Book Page 7 Bg element
var bookPage7BgAccess3;
var bookPage7BgOpacity1_3=1;
var bookPage7BgOpacity2_3=0;

//Variables required to manipulate the Book Page 8 Bg element
var bookPage8BgAccess3;
var bookPage8BgOpacity1_3=1;
var bookPage8BgOpacity2_3=0;

//Variables required to manipulate the Book Page 9 Bg element
var bookPage9BgAccess3;
var bookPage9BgOpacity1_3=1;
var bookPage9BgOpacity2_3=0;

//Variables required to manipulate the Book Page 10 Bg element
var bookPage10BgAccess3;
var bookPage10BgOpacity1_3=1;
var bookPage10BgOpacity2_3=0;

//Variables required to manipulate the Book Paragraph Bg 3 element
var bookParagraphBg3Access3;
var bookParagraphBg3Opacity1_3=0;
var bookParagraphBg3Opacity2_3=1;

//Variables required to manipulate the Chapter 1 element
var chapter1Access3;
var chapter1Opacity1_3=1;
var chapter1Opacity2_3=0;

//Variables required to reset the property values of the elements
var isParagraphAnimated1_3=false;
var isParagraphAnimated2_3=false;

//Variables required to manipulate the Page 1 element
var page1Access3;
var page1Opacity1_3=1;
var page1Opacity2_3=0;

//Variables required to manipulate the Page 2 element
var page2Access3;
var page2Opacity1_3=1;
var page2Opacity2_3=0;

//Variables required to manipulate the Page 3 element
var page3Access3;
var page3Top1_3=66;
var page3Top2_3=-50;

//Variables required to manipulate the Page 4 element
var page4Access3;
var page4Opacity1_3=1;
var page4Opacity2_3=0;

//Variables required to manipulate the Page 5 element
var page5Access3;
var page5Opacity1_3=1;
var page5Opacity2_3=0;

//Variables required to manipulate the Page 6 element
var page6Access3;
var page6Opacity1_3=1;
var page6Opacity2_3=0;

//Variables required to manipulate the Page 7 element
var page7Access3;
var page7Opacity1_3=1;
var page7Opacity2_3=0;

//Variables required to manipulate the Page 8 element
var page8Access3;
var page8Opacity1_3=1;
var page8Opacity2_3=0;

//Variables required to manipulate the Page 9 element
var page9Access3;
var page9Opacity1_3=1;
var page9Opacity2_3=0;

//Variables required to manipulate the Page 10 element
var page10Access3;
var page10Opacity1_3=1;
var page10Opacity2_3=0;

//Variables required to manipulate the Book Paragraph 1 element
var paragraph1Access3;
var paragraph1Opacity1_3=0;
var paragraph1Opacity2_3=1;

//Variables required to manipulate the Book Paragraph 2 element
var paragraph2Access3;
var paragraph2Opacity1_3=0;
var paragraph2Opacity2_3=1;

//Variables required to manipulate the Book Paragraph 3 element
var paragraph3Access3;
var paragraph3Opacity1_3=0;
var paragraph3Opacity2_3=1;

//Variables required to manipulate the Book Paragraph 4 element
var paragraph4Access3;
var paragraph4Opacity1_3=0;
var paragraph4Opacity2_3=1;

//Variables required to manipulate the Book Paragraph 5 element
var paragraph5Access3;
var paragraph5Opacity1_3=0;
var paragraph5Opacity2_3=1;

var paragraphAnimate1_3;
var paragraphAnimate2_3;

function bookSetup3_3()
{
	bookParagraphBg3Access3=document.getElementById("bookParagraphBg3");
	bookParagraphBg3Access3.addEventListener("click",animateParagraph2_3,false);
	
	page3Access3=document.getElementById("page3");
	page3Access3.addEventListener("click",animateParagraph1_3,false);
}

function animateParagraph1_3()
{
	paragraphAnimate1_3=window.setInterval(showPage3Paragraphs3,15);
}

function animateParagraph2_3()
{
	paragraphAnimate2_3=window.setInterval(hidePage3Paragraphs3,15);
}

function showPage3Paragraphs3()
{
	bookChapter1BgAccess3=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess3=document.getElementById("bookPage1Bg");
	bookPage2BgAccess3=document.getElementById("bookPage2Bg");
	bookPage3BgAccess3=document.getElementById("bookPage3Bg");
	bookPage4BgAccess3=document.getElementById("bookPage4Bg");
	bookPage5BgAccess3=document.getElementById("bookPage5Bg");
	bookPage6BgAccess3=document.getElementById("bookPage6Bg");
	bookPage7BgAccess3=document.getElementById("bookPage7Bg");
	bookPage8BgAccess3=document.getElementById("bookPage8Bg");
	bookPage9BgAccess3=document.getElementById("bookPage9Bg");
	bookPage10BgAccess3=document.getElementById("bookPage10Bg");
	
	bookParagraphBg3Access3=document.getElementById("bookParagraphBg3");
	
	chapter1Access3=document.getElementById("chapter1");
	
	page1Access3=document.getElementById("page1");
	page2Access3=document.getElementById("page2");
	page3Access3=document.getElementById("page3");
	page4Access3=document.getElementById("page4");
	page5Access3=document.getElementById("page5");
	page6Access3=document.getElementById("page6");
	page7Access3=document.getElementById("page7");
	page8Access3=document.getElementById("page8");
	page9Access3=document.getElementById("page9");
	page10Access3=document.getElementById("page10");
	
	paragraph1Access3=document.getElementById("bookParagraph3-1");
	paragraph2Access3=document.getElementById("bookParagraph3-2");
	paragraph3Access3=document.getElementById("bookParagraph3-3");
	paragraph4Access3=document.getElementById("bookParagraph3-4");
	paragraph5Access3=document.getElementById("bookParagraph3-5");
	
	bookChapter1BgAccess3.style.opacity=bookChapter1BgOpacity1_3;
	
	bookPage1BgAccess3.style.opacity=bookPage1BgOpacity1_3;
	bookPage2BgAccess3.style.opacity=bookPage2BgOpacity1_3;
	
	bookPage3BgAccess3.style.top=bookPage3BgTop1_3+"px";
	
	bookPage4BgAccess3.style.opacity=bookPage4BgOpacity1_3;
	bookPage5BgAccess3.style.opacity=bookPage5BgOpacity1_3;
	bookPage6BgAccess3.style.opacity=bookPage6BgOpacity1_3;
	bookPage7BgAccess3.style.opacity=bookPage7BgOpacity1_3;
	bookPage8BgAccess3.style.opacity=bookPage8BgOpacity1_3;
	bookPage9BgAccess3.style.opacity=bookPage9BgOpacity1_3;
	bookPage10BgAccess3.style.opacity=bookPage10BgOpacity1_3;
	
	bookParagraphBg3Access3.style.display="block";
	bookParagraphBg3Access3.style.opacity=bookParagraphBg3Opacity1_3;
	
	chapter1Access3.style.opacity=chapter1Opacity1_3;
	
	page1Access3.style.opacity=page1Opacity1_3;
	page2Access3.style.opacity=page2Opacity1_3;
	
	page3Access3.style.top=page3Top1_3+"px";
	
	page4Access3.style.opacity=page4Opacity1_3;
	page5Access3.style.opacity=page5Opacity1_3;
	page6Access3.style.opacity=page6Opacity1_3;
	page7Access3.style.opacity=page7Opacity1_3;
	page8Access3.style.opacity=page8Opacity1_3;
	page9Access3.style.opacity=page9Opacity1_3;
	page10Access3.style.opacity=page10Opacity1_3;
	
	paragraph1Access3.style.display="block";
	paragraph1Access3.style.opacity=paragraph1Opacity1_3;
	
	paragraph2Access3.style.display="block";
	paragraph2Access3.style.opacity=paragraph2Opacity1_3;
	
	paragraph3Access3.style.display="block";
	paragraph3Access3.style.opacity=paragraph3Opacity1_3;
	
	paragraph4Access3.style.display="block";
	paragraph4Access3.style.opacity=paragraph4Opacity1_3;
	
	paragraph5Access3.style.display="block";
	paragraph5Access3.style.opacity=paragraph5Opacity1_3;
	
	if(bookChapter1BgOpacity1_3<=0)
	{
		bookChapter1BgOpacity1_3=0;
		bookChapter1BgAccess3.style.display="none";
		
		bookPage1BgOpacity1_3=0;
		bookPage2BgOpacity1_3=0;
		
		bookPage3BgTop1_3-=0.5;
		
		bookPage4BgOpacity1_3=0;
		bookPage5BgOpacity1_3=0;
		bookPage6BgOpacity1_3=0;
		bookPage7BgOpacity1_3=0;
		bookPage8BgOpacity1_3=0;
		bookPage9BgOpacity1_3=0;
		bookPage10BgOpacity1_3=0;
		
		bookPage1BgAccess3.style.display="none";
		bookPage2BgAccess3.style.display="none";
		
		bookPage4BgAccess3.style.display="none";
		bookPage5BgAccess3.style.display="none";
		bookPage6BgAccess3.style.display="none";
		bookPage7BgAccess3.style.display="none";
		bookPage8BgAccess3.style.display="none";
		bookPage9BgAccess3.style.display="none";
		bookPage10BgAccess3.style.display="none";
		
		chapter1Opacity1_3=0;
		chapter1Access3.style.display="none";
		
		page1Opacity1_3=0;
		page2Opacity1_3=0;
		
		page3Top1_3-=0.5;
		
		page4Opacity1_3=0;
		page5Opacity1_3=0;
		page6Opacity1_3=0;
		page7Opacity1_3=0;
		page8Opacity1_3=0;
		page9Opacity1_3=0;
		page10Opacity1_3=0;
		
		page1Access3.style.display="none";
		page2Access3.style.display="none";
		
		page4Access3.style.display="none";
		page5Access3.style.display="none";
		page6Access3.style.display="none";
		page7Access3.style.display="none";
		page8Access3.style.display="none";
		page9Access3.style.display="none";
		page10Access3.style.display="none";
		
		if(bookPage3BgTop1_3<=-52)
		{
			bookParagraphBg3Opacity1_3+=0.01;
			
			bookPage3BgTop1_3=-52;
			
			page3Top1_3=-50;
			
			paragraph1Opacity1_3+=0.01;
			paragraph2Opacity1_3+=0.01;
			paragraph3Opacity1_3+=0.01;
			paragraph4Opacity1_3+=0.01;
			paragraph5Opacity1_3+=0.01;
			
			if(bookParagraphBg3Opacity1_3>=1)
			{
				bookParagraphBg3Opacity1_3=1;
				
				paragraph1Opacity1_3=1;
				paragraph2Opacity1_3=1;
				paragraph3Opacity1_3=1;
				paragraph4Opacity1_3=1;
				paragraph5Opacity1_3=1;
				
				isParagraphAnimated1_3=true;
				
				if(isParagraphAnimated1_3==true)
				{
					bookChapter1BgOpacity1_3=1;
		
					bookPage1BgOpacity1_3=1;
					bookPage2BgOpacity1_3=1;
		
					bookPage3BgTop1_3=64;
					
					bookPage4BgOpacity1_3=1;
					bookPage5BgOpacity1_3=1;
					bookPage6BgOpacity1_3=1;
					bookPage7BgOpacity1_3=1;
					bookPage8BgOpacity1_3=1;
					bookPage9BgOpacity1_3=1;
					bookPage10BgOpacity1_3=1;
		
					bookParagraphBg3Opacity1_3=0;
					
					chapter1Opacity1_3=1;
					
					page1Opacity1_3=1;
					page2Opacity1_3=1;
		
					page3Top1_3=66;
					
					page4Opacity1_3=1;
					page5Opacity1_3=1;
					page6Opacity1_3=1;
					page7Opacity1_3=1;
					page8Opacity1_3=1;
					page9Opacity1_3=1;
					page10Opacity1_3=1;
		
					paragraph1Opacity1_3=0;
					paragraph2Opacity1_3=0;
					paragraph3Opacity1_3=0;
					paragraph4Opacity1_3=0;
					paragraph5Opacity1_3=0;
				}
				window.clearInterval(paragraphAnimate1_3);
			}
		}
	}
	
	bookChapter1BgOpacity1_3-=0.01;
	
	bookPage1BgOpacity1_3-=0.01;
	bookPage2BgOpacity1_3-=0.01;
	
	bookPage4BgOpacity1_3-=0.01;
	bookPage5BgOpacity1_3-=0.01;
	bookPage6BgOpacity1_3-=0.01;
	bookPage7BgOpacity1_3-=0.01;
	bookPage8BgOpacity1_3-=0.01;
	bookPage9BgOpacity1_3-=0.01;
	bookPage10BgOpacity1_3-=0.01;
	
	chapter1Opacity1_3-=0.01;
	
	page1Opacity1_3-=0.01;
	page2Opacity1_3-=0.01;
	
	page4Opacity1_3-=0.01;
	page5Opacity1_3-=0.01;
	page6Opacity1_3-=0.01;
	page7Opacity1_3-=0.01;
	page8Opacity1_3-=0.01;
	page9Opacity1_3-=0.01;
	page10Opacity1_3-=0.01;
	
}

function hidePage3Paragraphs3()
{
	bookChapter1BgAccess3=document.getElementById("bookChapter1Bg");
	
	bookPage1BgAccess3=document.getElementById("bookPage1Bg");
	bookPage2BgAccess3=document.getElementById("bookPage2Bg");
	bookPage3BgAccess3=document.getElementById("bookPage3Bg");
	bookPage4BgAccess3=document.getElementById("bookPage4Bg");
	bookPage5BgAccess3=document.getElementById("bookPage5Bg");
	bookPage6BgAccess3=document.getElementById("bookPage6Bg");
	bookPage7BgAccess3=document.getElementById("bookPage7Bg");
	bookPage8BgAccess3=document.getElementById("bookPage8Bg");
	bookPage9BgAccess3=document.getElementById("bookPage9Bg");
	bookPage10BgAccess3=document.getElementById("bookPage10Bg");
	
	bookParagraphBg3Access3=document.getElementById("bookParagraphBg3");
	
	chapter1Access3=document.getElementById("chapter1");
	
	page1Access3=document.getElementById("page1");
	page2Access3=document.getElementById("page2");
	page3Access3=document.getElementById("page3");
	page4Access3=document.getElementById("page4");
	page5Access3=document.getElementById("page5");
	page6Access3=document.getElementById("page6");
	page7Access3=document.getElementById("page7");
	page8Access3=document.getElementById("page8");
	page9Access3=document.getElementById("page9");
	page10Access3=document.getElementById("page10");
	
	paragraph1Access3=document.getElementById("bookParagraph3-1");
	paragraph2Access3=document.getElementById("bookParagraph3-2");
	paragraph3Access3=document.getElementById("bookParagraph3-3");
	paragraph4Access3=document.getElementById("bookParagraph3-4");
	paragraph5Access3=document.getElementById("bookParagraph3-5");
	
	bookChapter1BgAccess3.style.display="block";
	bookChapter1BgAccess3.style.opacity=bookChapter1BgOpacity2_3;
	
	bookPage1BgAccess3.style.display="block";
	bookPage1BgAccess3.style.opacity=bookPage1BgOpacity2_3;
	
	bookPage2BgAccess3.style.display="block";
	bookPage2BgAccess3.style.opacity=bookPage2BgOpacity2_3;
	
	bookPage3BgAccess3.style.top=bookPage3BgTop2_3+"px";
	
	bookPage4BgAccess3.style.display="block";
	bookPage4BgAccess3.style.opacity=bookPage4BgOpacity2_3;
	
	bookPage5BgAccess3.style.display="block";
	bookPage5BgAccess3.style.opacity=bookPage5BgOpacity2_3;
	
	bookPage6BgAccess3.style.display="block";
	bookPage6BgAccess3.style.opacity=bookPage6BgOpacity2_3;
	
	bookPage7BgAccess3.style.display="block";
	bookPage7BgAccess3.style.opacity=bookPage7BgOpacity2_3;
	
	bookPage8BgAccess3.style.display="block";
	bookPage8BgAccess3.style.opacity=bookPage8BgOpacity2_3;
	
	bookPage9BgAccess3.style.display="block";
	bookPage9BgAccess3.style.opacity=bookPage9BgOpacity2_3;
	
	bookPage10BgAccess3.style.display="block";
	bookPage10BgAccess3.style.opacity=bookPage10BgOpacity2_3;
	
	bookParagraphBg3Access3.style.opacity=bookParagraphBg3Opacity2_3;
	
	chapter1Access3.style.display="block";
	chapter1Access3.style.opacity=chapter1Opacity2_3;
	
	page1Access3.style.display="block";
	page1Access3.style.opacity=page1Opacity2_3;
	
	page2Access3.style.display="block";
	page2Access3.style.opacity=page2Opacity2_3;
	
	page3Access3.style.top=page3Top2_3+"px";
	
	page4Access3.style.display="block";
	page4Access3.style.opacity=page4Opacity2_3;
	
	page5Access3.style.display="block";
	page5Access3.style.opacity=page5Opacity2_3;
	
	page6Access3.style.display="block";
	page6Access3.style.opacity=page6Opacity2_3;
	
	page7Access3.style.display="block";
	page7Access3.style.opacity=page7Opacity2_3;
	
	page8Access3.style.display="block";
	page8Access3.style.opacity=page8Opacity2_3;
	
	page9Access3.style.display="block";
	page9Access3.style.opacity=page9Opacity2_3;
	
	page10Access3.style.display="block";
	page10Access3.style.opacity=page10Opacity2_3;
	
	paragraph1Access3.style.opacity=paragraph1Opacity2_3;
	paragraph2Access3.style.opacity=paragraph2Opacity2_3;
	paragraph3Access3.style.opacity=paragraph3Opacity2_3;
	paragraph4Access3.style.opacity=paragraph4Opacity2_3;
	paragraph5Access3.style.opacity=paragraph5Opacity2_3;
	
	if(bookParagraphBg3Opacity2_3<=0)
	{
		bookPage3BgTop2_3+=0.5;
		
		bookParagraphBg3Opacity2_3=0;
		bookParagraphBg3Access3.style.display="none";
		
		page3Top2_3+=0.5;
		
		paragraph1Opacity2_3=0;
		paragraph2Opacity2_3=0;
		paragraph3Opacity2_3=0;
		paragraph4Opacity2_3=0;
		paragraph5Opacity2_3=0;
		
		paragraph1Access3.style.display="none";
		paragraph2Access3.style.display="none";
		paragraph3Access3.style.display="none";
		paragraph4Access3.style.display="none";
		paragraph5Access3.style.display="none";
		
		if(bookPage3BgTop2_3>=64)
		{
			bookChapter1BgOpacity2_3+=0.01;
			
			bookPage1BgOpacity2_3+=0.01;
			bookPage2BgOpacity2_3+=0.01;
			
			bookPage3BgTop2_3=64;
			
			bookPage4BgOpacity2_3+=0.01;
			bookPage5BgOpacity2_3+=0.01;
			bookPage6BgOpacity2_3+=0.01;
			bookPage7BgOpacity2_3+=0.01;
			bookPage8BgOpacity2_3+=0.01;
			bookPage9BgOpacity2_3+=0.01;
			bookPage10BgOpacity2_3+=0.01;
			
			chapter1Opacity2_3+=0.01;
			
			page1Opacity2_3+=0.01;
			page2Opacity2_3+=0.01;
			
			page3Top2_3=66;
			
			page4Opacity2_3+=0.01;
			page5Opacity2_3+=0.01;
			page6Opacity2_3+=0.01;
			page7Opacity2_3+=0.01;
			page8Opacity2_3+=0.01;
			page9Opacity2_3+=0.01;
			page10Opacity2_3+=0.01;
			
			if(bookPage1BgOpacity2_3>=1)
			{
				bookChapter1BgOpacity2_3=0;
				
				bookPage1BgOpacity2_3=0;
				bookPage2BgOpacity2_3=0;
				
				bookPage3BgTop2_3=-52;
				
				bookPage4BgOpacity2_3=0;
				bookPage5BgOpacity2_3=0;
				bookPage6BgOpacity2_3=0;
				bookPage7BgOpacity2_3=0;
				bookPage8BgOpacity2_3=0;
				bookPage9BgOpacity2_3=0;
				bookPage10BgOpacity2_3=0;
				
				bookParagraphBg3Opacity2_3=1;
				
				chapter1Opacity2_3=0;
			
				page1Opacity2_3=0;
				page2Opacity2_3=0;
				
				page3Top2_3=-50;
				
				page4Opacity2_3=0;
				page5Opacity2_3=0;
				page6Opacity2_3=0;
				page7Opacity2_3=0;
				page8Opacity2_3=0;
				page9Opacity2_3=0;
				page10Opacity2_3=0;
				
				paragraph1Opacity2_3=1;
				paragraph2Opacity2_3=1;
				paragraph3Opacity2_3=1;
				paragraph4Opacity2_3=1;
				paragraph5Opacity2_3=1;
				
				window.clearInterval(paragraphAnimate2_3);
			}
		}
	}
	
	bookParagraphBg3Opacity2_3-=0.01;
	
	paragraph1Opacity2_3-=0.01;
	paragraph2Opacity2_3-=0.01;
	paragraph3Opacity2_3-=0.01;
	paragraph4Opacity2_3-=0.01;
	paragraph5Opacity2_3-=0.01;
	
}
window.addEventListener("load",bookSetup3_3,false);