import java.util.*;
class Myexcep extends Exception
{
public String toString()
{
return " User defined exception--Composite no not allowed";
}
}
class Ex7
{
void msg(int a)throws Myexcep
{
int i,flag;
if(a==2)
{
System.out.println("prime");
}
else
{
flag=0;
for(i=2;i<=a/2;i++)
{
if(a%i==0)
{
flag++;
break;
}
}
if(flag==0)
{
System.out.println("prime");
}
else
{
throw new Myexcep();
}
}
}
public static void main(String args[])
{
int num;
Scanner sc=new Scanner(System.in);
System.out.println("enter any value");
num=sc.nextInt();
Ex7 e1=new Ex7();
try
{
e1.msg(num);
}
catch(Exception e)
{
System.out.println("exception handeled:"+e);
}
}
}
