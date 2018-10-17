using System;

namespace backend_test.Helpers
{
    public class DateUtil
    {
        public static DateTime FromUnixTime(long ticks)
        {
            DateTime dateTime = new System.DateTime(1970, 1, 1, 0, 0, 0, 0);
            return dateTime.AddSeconds(ticks);
        }
    }
}