
public class Conditions {
    public static void main(String[] argu) {
        int age = 10;

        // if - else condition
        if (age < 18) {
            System.out.println("not allow to drive the car");
        } else {
            System.out.println("you are allow to drive the car");
        }

        // if-else-if ladder conditions

        int marks = 85;
        if (marks >= 35 && marks < 50) {
            System.out.println("Pass : Decent");
        } else if (marks > 50 && marks < 80) {
            System.out.println("Pass : Average");
        } else if (marks >= 80 && marks <= 100) {
            System.out.println("Pass : Excellent");
        } else {
            System.out.println("Fail : Wasted");
        }

        // nested if else conditions

        int Age = 17;

        if (Age > 18) {
            if (Age == 18) {
                System.out.println("you can drive the car");
            }
            else {
                System.out.println("you can not drive the car");
            }
            if (Age < 18) {
                System.out.println("you dont have licens");
                
            }
        }
        else {
            System.out.println("Hello bachhe tum kyo gadi chala rahe ho");
        }


        // int Age = 14;
        // boolean licence = true;
        // if (Age >= 18) {
        //     if (licence == true) {
        //         System.out.println("you can drive the car");
        //     } else {
        //         System.out.println("you dont have licence for driving");
        //     }
        // } else {
        //     System.out.println("You are under age can not drive the car");
        // }

        // switch condition
        String fruit = "mango";
        switch (fruit) {
            case "apple":
                System.out.println("this is apple ");
                break;
            case "banana":
                System.out.println("this is banaba ");
                break;
            case "pineapple":
                System.out.println("this is pineapple ");
                break;
            case "mango":
                System.out.println("this is mango yesss got it ");
                break;

            default:
                break;
        }

        // switch case another example

        int number = 4;

        switch (number) {
            case 1:
                System.out.println("call the police");
                break;
            case 2:
                System.out.println("call the customer");
                break;
            case 3:
                System.out.println("call the emergency");
                break;
            case 4:
                System.out.println("call the ambulance");
                break;
            default:
                System.out.println("choose the valid number");
        }
        
        

    }
}
