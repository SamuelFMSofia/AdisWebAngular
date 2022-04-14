
  function padTo2Digits(num : number) : string {
    return num.toString().padStart(2, '0');
  }
      
  export function formatDate(date : Date):string {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/');
  }

  export function setDateFromString(dateString : string): Date {
    let dateParts = dateString.split("/");
    // month is 0-based, that's why we need dataParts[1] - 1
    return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]); 
  }

  export function isDateInRange( dateString:string, startRange:Date, endRange:Date) : boolean{
    
    if (dateString == null || startRange == null || endRange == null) {
      return false;
    }

    console.log("dateString : "+dateString);
    console.log("startDate : "+startRange);
    console.log("endDate : "+endRange);


    let date = setDateFromString(dateString);

    console.log("date : "+date);

    let result : boolean = ( startRange.getTime() <= date.getTime() && date.getTime() <= endRange.getTime() );
    console.log("result: " +result);
    return result;
  }
      
